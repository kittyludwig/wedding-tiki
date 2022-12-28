package nl.tiki.wedding.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "gast")
public class Gast {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(nullable = false)
    private String uniekeCode;
    @Column(nullable = false)
    private String voornaam;
    @Column(nullable = false)
    private String achternaam;
    private String emailAdres;
    private boolean familie;
    private boolean dagGast;
}
