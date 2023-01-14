package nl.tiki.wedding.controller;

import lombok.AllArgsConstructor;
import nl.tiki.wedding.model.Dieetwens;
import nl.tiki.wedding.model.Gast;
import nl.tiki.wedding.model.VerzoekNummer;
import nl.tiki.wedding.model.dto.RsvpDto;
import nl.tiki.wedding.repository.DieetwensRepository;
import nl.tiki.wedding.repository.GastRepository;
import nl.tiki.wedding.repository.VerzoekNummerRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class RsvpController {

    private static final String JA = "ja";

    private static final String NEE = "nee";

    private final DieetwensRepository dieetwensRepository;

    private final VerzoekNummerRepository verzoekNummerRepository;

    private final GastRepository gastRepository;

    @PostMapping("/dieetwens")
    void saveRsvp(@RequestBody RsvpDto rsvpDto) {
        if (JA.equals(rsvpDto.getAanmelding()) || NEE.equals(rsvpDto.getAanmelding())) {
            Gast gast = new Gast();
            gast.setNaam(rsvpDto.getNaam());
            gast.setAanwezig(rsvpDto.getAanmelding());
            gast.setTypeGast(rsvpDto.getTypeGast());
            gast.setLogeren(rsvpDto.getLogeren());
            gastRepository.save(gast);

            if (JA.equals(rsvpDto.getAanmelding())) {
                Dieetwens dieetwens = new Dieetwens();
                dieetwens.setVegetarisch(rsvpDto.getVegetarisch());
                dieetwens.setAllergie(rsvpDto.getAllergie());
                dieetwens.setNaamGast(rsvpDto.getNaam());
                dieetwensRepository.save(dieetwens);

                VerzoekNummer verzoekNummer = new VerzoekNummer();
                verzoekNummer.setNaamGast(rsvpDto.getNaam());
                verzoekNummer.setTitel(rsvpDto.getVerzoekTitel());
                verzoekNummer.setArtiest(rsvpDto.getVerzoekArtiest());
                verzoekNummerRepository.save(verzoekNummer);
            }
        }
    }
}
