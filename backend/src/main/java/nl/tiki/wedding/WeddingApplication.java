package nl.tiki.wedding;

import nl.tiki.wedding.model.Gast;
import nl.tiki.wedding.repository.GastRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.stream.Stream;

@SpringBootApplication
public class WeddingApplication {

    public static void main(String[] args) {
        SpringApplication.run(WeddingApplication.class, args);
    }

//    @Bean
//    CommandLineRunner init(GastRepository gastRepository) {
//        return args -> {
//            Stream.of("John", "Julie", "Jennifer", "Helen", "Rachel").forEach(name -> {
//                Gast gast = new Gast();
//                gast.setVoornaam("Kitty");
//                gast.setAchternaam("Ludwig");
//                gast.setEmailAdres("test@test.nl");
//                gastRepository.save(gast);
//            });
//            gastRepository.findAll().forEach(System.out::println);
//        };
//    }
}
