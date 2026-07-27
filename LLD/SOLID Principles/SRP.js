// without SRP
class UserService {

    saveUser(user) {
        console.log("Saving user");
    }

    sendWelcomeEmail(user) {
        console.log("Sending email");
    }

    generateReport(user) {
        console.log("Generating report");
    }

}

// with SRP 

class UserRepository {

    save(user) {
        console.log("Saving user");
    }

}

class EmailService {

    sendWelcomeEmail(user) {
        console.log("Sending email");
    }

}

class ReportService {

    generate(user) {
        console.log("Generating report");
    }

}

