function generatePDF() {
    const { jsPDF } = window.jspdf;
    const companyName = document.getElementById("companyName").value.trim();

    if (!companyName) {
        alert("Please enter a company name.");
        return;
    }

    const todayDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    const coverLetter = `
${todayDate}

Dear Hiring Manager at ${companyName},

I am excited to apply for the Software Engineer position at ${companyName}. With over four years of experience building secure and scalable backend systems and a Master’s degree in Computer Science from California State University, Chico, I bring a proven track record of delivering high-performance solutions using Java, Spring Boot, Python, Django, and AWS.

In my role at CSU Chico, I optimized backend services for a real-time platform, improving API throughput by 27% and reducing latency by 18% through modular REST API design and Docker-based deployments. Previously, at Tally Solutions, I engineered ERP microservices with Java and Spring Boot, implemented Redis caching to cut API latency by 22%, and secured enterprise workflows using JWT-based authentication. These experiences strengthened my skills in distributed systems, cloud deployment, and API design while reinforcing my ability to collaborate effectively in Agile environments.

I am eager to bring my experience in backend engineering, problem-solving, and scalable architecture to contribute to your team’s success. Thank you for considering my application, and I look forward to the opportunity to discuss how I can add value to your organization.

Best regards,
Srinivasa Murthy K
    `;

    const pdf = new jsPDF();
    pdf.setFont("Times", "normal");
    pdf.setFontSize(12);
    pdf.text(coverLetter, 10, 20);
    pdf.save(`${companyName}_Cover_Letter.pdf`);
}
