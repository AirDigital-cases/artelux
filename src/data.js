import goldenTulipAltura from './assets/obras/letreiros/golden-tulip-altura.jpeg'
import primeCarTotem from './assets/obras/letreiros/prime-car-totem.jpg'
import primeCarFachada from './assets/obras/fachadas/prime-car-fachada.jpeg'
import maderoFachada from './assets/obras/fachadas/madero-fachada-iluminada.jpeg'
import pergoladoResidencial from './assets/obras/pergolados/pergolado-residencial.jpeg'
import rc7MotorsCobertura from './assets/obras/coberturas/rc7-motors-cobertura.jpeg'

export const whatsappLink = 'https://wa.me/5541996074886'
export const whatsappNumber = '(41) 99607-4886'
export const whatsappNumberIntl = '+55 41 99607-4886'
export const instagramHandle = '@artelux'

export const categoryMeta = {
  letreiros: {
    label: 'Letreiros',
    desc: 'Assinaturas visuais com leitura à distância, alto contraste e impacto urbano.'
  },
  fachadas: {
    label: 'Fachadas',
    desc: 'Composição comercial com acabamento premium, iluminação e presença arquitetônica.'
  },
  pergolados: {
    label: 'Pergolados',
    desc: 'Estruturas externas com desenho limpo, resistência e integração à fachada.'
  },
  coberturas: {
    label: 'Coberturas',
    desc: 'Grandes vãos metálicos e soluções robustas para proteger e valorizar o espaço.'
  }
}

export const services = [
  {
    id: 'letreiros',
    title: 'Letreiros',
    desc: 'Projetos de grande presença visual para coberturas, fachadas e pontos de alto fluxo.',
    icon: '🪧',
    image: goldenTulipAltura,
    imagePosition: '42% 48%',
    highlights: ['Grande altura', 'Marca instalada', 'Leitura à distância']
  },
  {
    id: 'fachadas',
    title: 'Fachadas',
    desc: 'Frentes comerciais com linguagem premium, brilho controlado e comunicação visual integrada.',
    icon: '🏢',
    image: maderoFachada,
    imagePosition: '50% 50%',
    highlights: ['Iluminação', 'Acabamento premium', 'Impacto comercial']
  },
  {
    id: 'pergolados',
    title: 'Pergolados',
    desc: 'Estruturas metálicas com linhas contemporâneas para áreas residenciais e corporativas.',
    icon: '🌿',
    image: pergoladoResidencial,
    imagePosition: '50% 55%',
    highlights: ['Linhas retas', 'Sombra marcante', 'Visual contemporâneo']
  },
  {
    id: 'coberturas',
    title: 'Coberturas',
    desc: 'Soluções de grande vão com performance estrutural e estética forte para operações comerciais.',
    icon: '🛡️',
    image: rc7MotorsCobertura,
    imagePosition: '50% 45%',
    highlights: ['Estrutura metálica', 'Grande vão', 'Comunicação visual integrada']
  }
]

export const portfolio = [
  {
    id: 'golden-tulip-altura',
    title: 'Golden Tulip',
    client: 'Golden Tulip',
    cat: 'letreiros',
    image: goldenTulipAltura,
    imagePosition: '42% 52%',
    alt: 'Hotel com letreiro Golden Tulip instalado em grande altura na cobertura, com vista para o mar.',
    desc: 'Projeto de letreiro em grande altura com leitura de longa distância e presença de marca em escala arquitetônica.',
    location: 'Cobertura hoteleira',
    highlights: ['Obra em altura', 'Hotelaria premium', 'Escala arquitetônica'],
    featured: true
  },
  {
    id: 'prime-car-fachada',
    title: 'Prime Car Curitiba',
    client: 'Prime Car Curitiba',
    cat: 'fachadas',
    image: primeCarFachada,
    imagePosition: '50% 46%',
    alt: 'Fachada da Prime Car Curitiba com pilares laranja e letreiro central em preto e branco.',
    desc: 'Fachada automotiva com acabamento brilhante, contraste forte e entrada principal desenhada para destacar a marca.',
    location: 'Fachada comercial',
    highlights: ['ACM premium', 'Contraste forte', 'Entrada de alto impacto']
  },
  {
    id: 'prime-car-totem',
    title: 'Prime Car em destaque vertical',
    client: 'Prime Car Curitiba',
    cat: 'letreiros',
    image: primeCarTotem,
    imagePosition: '50% 34%',
    alt: 'Ângulo vertical da fachada da Prime Car Curitiba destacando o letreiro instalado acima da entrada.',
    desc: 'Enquadramento vertical que valoriza o letreiro, os pilares metálicos e o acabamento refinado da entrada.',
    location: 'Frente comercial',
    highlights: ['Marca protagonista', 'Acabamento refinado', 'Visual premium']
  },
  {
    id: 'rc7-motors-cobertura',
    title: 'RC7 Motors',
    client: 'RC7 Motors',
    cat: 'coberturas',
    image: rc7MotorsCobertura,
    imagePosition: '50% 44%',
    alt: 'Cobertura metálica da RC7 Motors com letreiro iluminado e estrutura aparente.',
    desc: 'Cobertura metálica de grande vão com identidade visual iluminada e estrutura aparente de forte impacto urbano.',
    location: 'Cobertura comercial',
    highlights: ['Estrutura metálica', 'Fachada iluminada', 'Grande letreiro']
  },
  {
    id: 'madero-fachada-iluminada',
    title: 'Madero',
    client: 'Madero',
    cat: 'fachadas',
    image: maderoFachada,
    imagePosition: '50% 50%',
    alt: 'Fachada iluminada da marca Madero em ambiente interno com acabamento premium.',
    desc: 'Fachada iluminada com composição simétrica, comunicação de marca refinada e forte percepção de padrão premium.',
    location: 'Frente de loja',
    highlights: ['Iluminação cênica', 'Marca reconhecida', 'Acabamento premium']
  },
  {
    id: 'pergolado-residencial',
    title: 'Pergolado residencial',
    client: 'Projeto residencial',
    cat: 'pergolados',
    image: pergoladoResidencial,
    imagePosition: '50% 55%',
    alt: 'Pergolado metálico residencial instalado na fachada com linhas retas e visual contemporâneo.',
    desc: 'Pergolado metálico com desenho limpo e contemporâneo, integrando proteção solar e linguagem arquitetônica.',
    location: 'Residencial',
    highlights: ['Estrutura metálica', 'Linhas contemporâneas', 'Proteção com design']
  }
]

export const heroProject = portfolio[0]

export const showcaseMetrics = [
  { value: String(portfolio.length), label: 'obras reais no acervo inicial' },
  { value: '4', label: 'marcas identificadas nas imagens' },
  { value: '4', label: 'categorias executadas pela Artelux' }
]

export const authorityItems = [
  'Letreiros',
  'Fachadas',
  'Pergolados',
  'Coberturas'
]

export const brands = [
  {
    id: 'golden-tulip',
    name: 'Golden Tulip',
    sector: 'Hotelaria',
    image: goldenTulipAltura,
    imagePosition: '45% 38%',
    alt: 'Letreiro Golden Tulip instalado na cobertura do hotel.',
    summary: 'Marca identificada em obra de grande altura com forte presença arquitetônica.',
    projects: ['Letreiro em cobertura', 'Leitura de longa distância']
  },
  {
    id: 'prime-car',
    name: 'Prime Car Curitiba',
    sector: 'Automotivo premium',
    image: primeCarTotem,
    imagePosition: '50% 28%',
    alt: 'Letreiro e fachada da Prime Car Curitiba.',
    summary: 'Projeto com fachada de alto contraste e letreiro protagonista para operação automotiva.',
    projects: ['Fachada comercial', 'Letreiro principal']
  },
  {
    id: 'rc7-motors',
    name: 'RC7 Motors',
    sector: 'Automotivo',
    image: rc7MotorsCobertura,
    imagePosition: '50% 25%',
    alt: 'Letreiro iluminado da RC7 Motors instalado sobre cobertura metálica.',
    summary: 'Cobertura metálica com comunicação visual integrada e leitura forte ao entardecer.',
    projects: ['Cobertura metálica', 'Letreiro iluminado']
  },
  {
    id: 'madero',
    name: 'Madero',
    sector: 'Food service',
    image: maderoFachada,
    imagePosition: '50% 20%',
    alt: 'Fachada Madero com identidade visual e iluminação destacada.',
    summary: 'Fachada de operação gastronômica com acabamento premium e marca reconhecida.',
    projects: ['Fachada iluminada', 'Ambientação premium']
  }
]

export const differentials = [
  'Instalações em grandes alturas',
  'Fachadas iluminadas com leitura à distância',
  'Estruturas metálicas sob medida',
  'Acabamento premium em projetos comerciais',
  'Portfólio real com marcas reconhecidas',
  'Execução visual pensada para impacto de venda'
]
