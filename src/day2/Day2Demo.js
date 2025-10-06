// DAY 2 MAIN COMPONENT
import ProfileCard from '../components/ProfileCard';

const Day2Demo = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>📦 Day 2: Props & Reusable Components</h1>
      <p>Same component, different data!</p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
        <ProfileCard 
          name="Budi Santoso"
          role="Frontend Developer"
          location="Jakarta, Indonesia"
          skills="React, JavaScript, CSS"
        />
        <ProfileCard 
          name="Sari Wijaya"
          role="UI/UX Designer" 
          location="Bandung, Indonesia"
          skills="Figma, Adobe XD, Prototyping"
        />
      </div>
    </div>
  );
};

export default Day2Demo;