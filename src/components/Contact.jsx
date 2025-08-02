const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-5xl font-bold text-center mb-4">Contact Me</h2>
        <p className="text-center text-gray-400 mb-12">
          Have a project or want to collaborate? Let’s talk!
        </p>

        {/* Grid: Contact Info + Form */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            <p>
              📧 <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:youremail@example.com"
                className="text-blue-400 hover:underline"
              >
                youremail@example.com
              </a>
            </p>
            <p>
              🔗 <span className="font-semibold">LinkedIn:</span>{" "}
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                linkedin.com/in/yourprofile
              </a>
            </p>
            <p>
              💻 <span className="font-semibold">GitHub:</span>{" "}
              <a
                href="https://github.com/yourgithub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                github.com/yourgithub
              </a>
            </p>
          </div>

          {/* Right: Contact Form */}
          <form
            action="https://formspree.io/f/yourFormID" // Replace with your Formspree/EmailJS endpoint
            method="POST"
            className="space-y-6 bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
