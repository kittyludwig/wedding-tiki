package nl.tiki.wedding.controller;

import lombok.AllArgsConstructor;
import nl.tiki.wedding.model.Dieetwens;
import nl.tiki.wedding.model.DieetwensDto;
import nl.tiki.wedding.repository.DieetwensRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class DieetwensController {

    private final DieetwensRepository dieetwensRepository;

    @PostMapping("/dieetwens")
    void saveDieetwens(@RequestBody DieetwensDto dieetwensDto) {

        Dieetwens dieetwens = new Dieetwens();
        dieetwens.setVegetarisch(dieetwensDto.getVegetarisch());
        dieetwens.setVeganistisch(dieetwensDto.getVeganistisch());
        dieetwens.setAllergie(dieetwensDto.getAllergie());

        dieetwensRepository.save(dieetwens);
    }
}
