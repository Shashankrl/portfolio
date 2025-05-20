import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('should render the portfolio title', () => {
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
  });

  it('should show About section by default', () => {
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText(/Welcome to my neon-inspired portfolio/)).toBeInTheDocument();
  });

  it('should switch to Projects section when Projects button is clicked', () => {
    fireEvent.click(screen.getByText('Projects'));
    expect(screen.getByText('My Projects')).toBeInTheDocument();
    
    // Check if project items are rendered
    expect(screen.getAllByText(/Project Title/)).toHaveLength(4);
  });

  it('should switch to Contact section when Contact button is clicked', () => {
    fireEvent.click(screen.getByText('Contact'));
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
  });

  it('should navigate between sections correctly', () => {
    // Start with About section (default)
    expect(screen.getByText('About Me')).toBeInTheDocument();
    
    // Navigate to Projects
    fireEvent.click(screen.getByText('Projects'));
    expect(screen.getByText('My Projects')).toBeInTheDocument();
    
    // Navigate to Contact
    fireEvent.click(screen.getByText('Contact'));
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
    
    // Back to About
    fireEvent.click(screen.getByText('About'));
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });

  it('should display the current year in the footer', () => {
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} Neon Portfolio. All rights reserved.`)).toBeInTheDocument();
  });

  it('should display skills in the About section', () => {
    expect(screen.getByText('Skills')).toBeInTheDocument();
    
    const skills = ['React', 'TypeScript', 'TailwindCSS', 'Node.js', 'Responsive Design', 'UI/UX'];
    skills.forEach(skill => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });
});