package nl.tiki.wedding.model.dto;

import lombok.Getter;

import java.io.Serializable;

@Getter
public class RsvpDto implements Serializable {
    private Long id;
    private String aanmelding;
    private String naam;
    private String vegetarisch;
    private String allergie;
    private String verzoekTitel;
    private String verzoekArtiest;
    private String logeren;
    private String typeGast;
}
