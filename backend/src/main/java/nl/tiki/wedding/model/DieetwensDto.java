package nl.tiki.wedding.model;

import lombok.Getter;

import java.io.Serializable;

@Getter
public class DieetwensDto implements Serializable {
    private Long id;
    private String vegetarisch;
    private String veganistisch;
    private String allergie;
}
