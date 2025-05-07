export default function Home() {
  return (
    <div style={{ backgroundColor: '#111827', color: 'white', minHeight: '100vh', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', textAlign: 'center' }}>956 Fun Tours</h1>
        <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Concerts. Games. Parties. Cold beer and a fun ride—956 style.
        </p>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem' }}>About Us</h2>
          <p>
            Welcome to 956 Fun Tours, owned and operated by Roberto Ramirez. We offer round-trip
            bus services to the hottest concerts, sports games, and events—with free beer on the
            bus to keep the good times rolling. Book your ticket, hop on, and let us handle the rest!
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem' }}>Upcoming Events</h2>
          <ul>
            <li>July 15 – Spurs vs. Rockets (San Antonio)</li>
            <li>August 12 – Bad Bunny Concert (Houston)</li>
            <li>September 9 – Cowboys Game Day (Dallas)</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem' }}>Book Your Spot</h2>
          <p>
            Reserve your seat today and join the party! All tours include round-trip transportation
            and unlimited beer during the ride. Must be 21+ to consume alcohol.
          </p>
          <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#2563eb', border: 'none', borderRadius: '4px', color: 'white' }}>
            View Ticket Options
          </button>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem' }}>Stay Updated</h2>
          <input type='email' placeholder='Enter your email' style={{ padding: '0.5rem', marginRight: '0.5rem', borderRadius: '4px' }} />
          <button style={{ padding: '0.5rem 1rem', backgroundColor: '#10b981', border: 'none', borderRadius: '4px', color: 'white' }}>
            Subscribe
          </button>
        </section>
      </div>
    </div>
  );
}