package nl.tiki.wedding.repository;

import nl.tiki.wedding.model.Gast;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GastRepository extends JpaRepository<Gast, Long> {

    Gast findByUniekeCode(String uniekeCode);
}
