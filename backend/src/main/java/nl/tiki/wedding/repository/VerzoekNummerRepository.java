package nl.tiki.wedding.repository;

import nl.tiki.wedding.model.VerzoekNummer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VerzoekNummerRepository extends JpaRepository<VerzoekNummer, Long> {
}
