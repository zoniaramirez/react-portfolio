export default function Contact() {
  return (
    <section className="mb-5 mt-2">
      <h2 className="mb-4">Contact</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" className="form-control" id="name" name="name" required />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" name="email" required />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="message">Message:</label>
          <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
    </section>
  );
}
