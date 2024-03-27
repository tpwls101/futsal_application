package com.mancity.user.user.domain.repository;

import com.mancity.user.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);

    boolean existsByNickName(String nickName);

    @Query("select u.nickName from User u where u.id = :id")
    String findNickNameById(long id);

    @Query("select u.id, u.nickName, u.image, u.mainStat.goalDecision, u.mainStat.pass, u.mainStat.speed, u.mainStat.distanceCovered, u.mainStat.defense from User u where u.isPlayer = true")
    List<Object[]> findAllPlayers();
}
