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
    private String naam;
    @Column(nullable = false)
    private String aanwezig;
    @Column(nullable = false)
    private String typeGast;
    @Column(nullable = true)
    private String logeren;
}