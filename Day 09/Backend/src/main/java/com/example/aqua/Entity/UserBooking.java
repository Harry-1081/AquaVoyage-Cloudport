package com.example.aqua.Entity;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Builder
@Entity
@Getter
@Setter
@Table(name="UserBooking")
public class UserBooking {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO )
	@Column(name="id")
	private int id;
	@Column(name="username")
	private String username;
	

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;
    
    @OneToMany(cascade = CascadeType.ALL ,orphanRemoval = true)
	@JoinColumn(name="entries",referencedColumnName = "id")
	private List<HotelEntity> hotelentiity;
	// @JoinColumn(name ="hotel_id",referencedColumnName = "hotelid")


	
	

}
	