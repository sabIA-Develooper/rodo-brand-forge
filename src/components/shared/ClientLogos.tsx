export function ClientLogos() {
  const clients = [
    { name: 'Cliente 1', logo: 'https://placehold.co/120x60/E5E7EB/111827?text=Cliente+1' },
    { name: 'Cliente 2', logo: 'https://placehold.co/120x60/E5E7EB/111827?text=Cliente+2' },
    { name: 'Cliente 3', logo: 'https://placehold.co/120x60/E5E7EB/111827?text=Cliente+3' },
    { name: 'Cliente 4', logo: 'https://placehold.co/120x60/E5E7EB/111827?text=Cliente+4' },
    { name: 'Cliente 5', logo: 'https://placehold.co/120x60/E5E7EB/111827?text=Cliente+5' },
    { name: 'Cliente 6', logo: 'https://placehold.co/120x60/E5E7EB/111827?text=Cliente+6' },
  ];

  return (
    <section className="py-12 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl lg:text-2xl font-semibold mb-8 text-muted-foreground">
          Empresas que Confiam na RODOTEC
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img 
                src={client.logo} 
                alt={`Logo ${client.name}`}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
