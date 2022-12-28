package nl.tiki.wedding.controller;

import lombok.AllArgsConstructor;
import nl.tiki.wedding.model.Gast;
import nl.tiki.wedding.repository.GastRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class GastController {

    private final GastRepository gastRepository;

    @GetMapping("/users")
    public List<Gast> getUsers() {
        return gastRepository.findAll();
    }

    @GetMapping("/user/{uniekeCode}")
    public Gast getGastByUniekeCode(@PathVariable String uniekeCode) {
        return gastRepository.findByUniekeCode(uniekeCode);
    }

    @PostMapping("/users")
    void addUser(@RequestBody Gast gast) {
        gastRepository.save(gast);
    }
}
