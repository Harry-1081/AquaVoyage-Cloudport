package com.example.aqua.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
//import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
//import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
// import com.springlearning.services.MailSenderSpring;


import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.mail.javamail.MimeMessageHelper;


@Service
public class EmailService {
	// @Autowired
	// private  JavaMailSender jms;
	
	// public void sendEmail(String to, String code,String Subjec) throws MessagingException {
        // MimeMessage message = jms.createMimeMessage();
        // MimeMessageHelper helper = new MimeMessageHelper(message, true);
        // helper.setTo(to);
        // helper.setSubject("Your code");
        // helper.setText("Your code is: " + code);
        // jms.send(message);
	// }
        //  @Autowired
        //   MailSenderSpring mailSenderSpring;

        @Autowired
        private JavaMailSender javaMailSender;
    
        public void sendEmail(String to, String otp,String subject) throws MessagingException, IOException {
            MimeMessage message = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            helper.setTo(to);
            helper.setSubject("OTP Confirmation");
    
            // Read the email template
            String emailContent = getEmailTemplateContent();
            
            // Replace placeholders in the template with dynamic data
            emailContent = emailContent.replace("[OTP_CODE]", otp);
    
            // Set the email content
            helper.setText(emailContent, true);
    
            javaMailSender.send(message);
        }
         private String getEmailTemplateContent() throws IOException {
        StringBuilder contentBuilder = new StringBuilder();
        try (BufferedReader br = new BufferedReader(new InputStreamReader(new ClassPathResource("templates/email.html").getInputStream()))) {
            String line;
            while ((line = br.readLine()) != null) {
                contentBuilder.append(line);
            }
        }
        return contentBuilder.toString();
    }
    
}
