package com.example.aqua.Service;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import java.util.List;

import com.example.aqua.Entity.UserBooking;
import com.example.aqua.repo.UserBookingRepoInt;

@Service
public class ImageuserService {
	@Autowired
	UserBookingRepoInt iuri;
	
	// public UserBooking UserBookings (UserBooking iue)
	// {
		// List<UserBooking> user = iuri.getByUsername(iue.getUser().getUsername());
// 		if(user.size()!=0)
// 		{
// 			ImageUserEntity oldUser = iuri.findById(user.get(0).getId()).get();
// 			oldUser.getImages().add(iue.getImages().get(0));
// 			return iuri.save(oldUser);
// 		}
// 		else
// 		{
// 			return iuri.save(iue);
// 		}
	// }
	
	public List<UserBooking> getAllBookings() {
		// TODO Auto-generated method stub
		return iuri.findAll();
	}
	public List<UserBooking> getByUsername(String username)
	{
		return iuri.getByUsername(username);
	}
	
// 	public void deleteUserWithImage(int id)
// 	{
// 		 iuri.deleteById(id);
// 	}
	
}
