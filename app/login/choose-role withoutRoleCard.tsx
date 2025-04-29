// ChooseRole.tsx
import React from 'react';

interface RoleCardProps {
  imageSrc: string;
  role: string;
  onClick: () => void;
}

const RoleCard: React.FC<RoleCardProps> = ({ imageSrc, role, onClick }) => (
  <div
    onClick={onClick}
    className="flex items-center gap-4 p-4 border rounded-xl shadow hover:shadow-md cursor-pointer transition"
  >
    <img src={imageSrc} alt={role} className="w-16 h-16 object-contain" />
    <span className="text-lg font-medium">{role}</span>
  </div>
);

const ChooseRole: React.FC = () => {
  const handleRoleSelect = (role: string) => {
    console.log(`Selected Role: ${role}`);
    // Navigate to the next page depending on role
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-8">Pilih Peran</h1>

      <div className="flex flex-col gap-4">
        <RoleCard
          imageSrc="/images/farmer.png" // replace with your actual asset paths
          role="Petani"
          onClick={() => handleRoleSelect('Petani')}
        />
        <RoleCard
          imageSrc="/images/processor.png"
          role="Pengelolah"
          onClick={() => handleRoleSelect('Pengelolah')}
        />
        <RoleCard
          imageSrc="/images/distributor.png"
          role="Distributor"
          onClick={() => handleRoleSelect('Distributor')}
        />
        <RoleCard
          imageSrc="/images/consumer.png"
          role="Konsumen"
          onClick={() => handleRoleSelect('Konsumen')}
        />
      </div>
    </div>
  );
};

export default ChooseRole;
