package nl.tiki.wedding.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "verzoek_nummer")
public class VerzoekNummer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String naamGast;
    private String titel;
    private String artiest;
}
