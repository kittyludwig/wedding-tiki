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
    @Column(nullable = false)
    private String vegetarisch;
    @Column(nullable = false)
    private String veganistisch;
    private String allergie;
    @OneToOne
    private Gast gast;
}
