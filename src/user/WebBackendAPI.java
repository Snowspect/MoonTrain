package user;

import java.io.IOException;
import java.sql.SQLException;

import javax.ws.rs.*; 
import javax.ws.rs.core.MediaType; 
import javax.ws.rs.Path;

@Path("/login") 
@Consumes(MediaType.APPLICATION_JSON) 
@Produces("text/plain") 
public class WebBackendAPI { 

	@GET
	@Consumes(MediaType.APPLICATION_JSON) 
	public String test() 
	{ 
		System.out.println("hej");
		return "Hello";
	}
}

