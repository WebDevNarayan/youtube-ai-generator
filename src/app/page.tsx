import ContentForm from '@/components/ContentForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f]">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-blue-900/10"></div>
      <div className="relative z-10">
        <ContentForm />
      </div>
    </main>
  );
}
