package nl.tiki.wedding.repository;

import nl.tiki.wedding.model.Dieetwens;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DieetwensRepository extends JpaRepository<Dieetwens, Long> {
}
