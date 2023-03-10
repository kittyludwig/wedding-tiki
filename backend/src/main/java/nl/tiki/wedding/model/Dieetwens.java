package nl.tiki.wedding.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "dieetwens")
public class Dieetwens {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String naamGast;
    @Column(nullable = false)
    private String vegetarisch;
    private String allergie;
}
