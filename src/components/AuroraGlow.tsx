import React from 'react'

export const AuroraGlow: React.FC = () => {
  return (
    <>
      {/* Top Aurora Glow */}
      <div
        className="fixed top-0 left-0 right-0 h-96 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% -50%, rgba(212, 175, 55, 0.08) 0%, transparent 70%)`,
          animation: 'aurora-drift 8s ease-in-out infinite',
          zIndex: 1,
        }}
      />

      {/* Bottom Aurora Glow */}
      <div
        className="fixed bottom-0 left-0 right-0 h-96 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 150%, rgba(212, 175, 55, 0.05) 0%, transparent 70%)`,
          animation: 'aurora-drift-reverse 10s ease-in-out infinite',
          zIndex: 1,
        }}
      />

      {/* Side Glows */}
      <div
        className="fixed top-1/2 -left-32 w-96 h-96 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, rgba(212, 175, 55, 0.04) 0%, transparent 70%)`,
          animation: 'aurora-pulse 6s ease-in-out infinite',
          zIndex: 1,
          transform: 'translateY(-50%)',
        }}
      />

      <div
        className="fixed top-1/2 -right-32 w-96 h-96 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, rgba(212, 175, 55, 0.04) 0%, transparent 70%)`,
          animation: 'aurora-pulse-reverse 7s ease-in-out infinite',
          zIndex: 1,
          transform: 'translateY(-50%)',
        }}
      />

      <style>{`
        @keyframes aurora-drift {
          0%, 100% { opacity: 0.8; transform: translateY(0px); }
          50% { opacity: 1; transform: translateY(-20px); }
        }

        @keyframes aurora-drift-reverse {
          0%, 100% { opacity: 0.6; transform: translateY(0px); }
          50% { opacity: 0.8; transform: translateY(20px); }
        }

        @keyframes aurora-pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }

        @keyframes aurora-pulse-reverse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </>
  )
}
