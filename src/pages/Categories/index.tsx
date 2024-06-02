import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/starWars.png'
import zelda from '../../assets/images/zelda.png'

const promocoes: Game[] = [
  {
    id: 1,
    description:
      'Notice the use of %PUBLIC_URL% in the tags above it will be replaced with the URL of the folder during the build Only files inside the  folder can be referenced from the HTML',
    category: 'Ação',
    system: 'Windows',
    infos: ['-10%', 'R$ 150'],
    image: resident,
    title: 'Resident Evil 4',
  },
  {
    id: 2,
    description:
      'Notice the use of %PUBLIC_URL% in the tags above it will be replaced with the URL of the folder during the build Only files inside the  folder can be referenced from the HTML',
    category: 'Ação',
    system: 'PS3',
    infos: ['-10%', 'R$ 450'],
    image: resident,
    title: 'Resident Evil 4',
  },
  {
    id: 3,
    description:
      'Notice the use of %PUBLIC_URL% in the tags above it will be replaced with the URL of the folder during the build Only files inside the  folder can be referenced from the HTML',
    category: 'Ação',
    system: 'PS4',
    infos: ['-10%', 'R$ 350'],
    image: resident,
    title: 'Resident Evil 4',
  },
  {
    id: 4,
    description:
      'Notice the use of %PUBLIC_URL% in the tags above it will be replaced with the URL of the folder during the build Only files inside the  folder can be referenced from the HTML',
    category: 'Ação',
    system: 'PS5',
    infos: ['-10%', 'R$ 250'],
    image: resident,
    title: 'Resident Evil 4',
  },
]

const emBreve: Game[] = [
  {
    id: 5,
    description:
      'Notice the use of %PUBLIC_URL% in the tags above it will be replaced with the URL of the folder during the build Only files inside the  folder can be referenced from the HTML',
    category: 'Ação',
    system: 'Windows',
    infos: ['-10%', 'R$ 150'],
    image: diablo,
    title: 'Diablo',
  },
  {
    id: 6,
    description:
      'Notice the use of %PUBLIC_URL% in the tags above it will be replaced with the URL of the folder during the build Only files inside the  folder can be referenced from the HTML',
    category: 'Ação',
    system: 'Windows',
    infos: ['-10%', 'R$ 150'],
    image: resident,
    title: 'Resident Evil 4',
  },
  {
    id: 7,
    description:
      'Notice the use of %PUBLIC_URL% in the tags above it will be replaced with the URL of the folder during the build Only files inside the  folder can be referenced from the HTML',
    category: 'Ação',
    system: 'Windows',
    infos: ['-10%', 'R$ 150'],
    image: zelda,
    title: 'Zelda',
  },
  {
    id: 8,
    description:
      'Notice the use of %PUBLIC_URL% in the tags above it will be replaced with the URL of the folder during the build Only files inside the  folder can be referenced from the HTML',
    category: 'Ação',
    system: 'Nintendo',
    infos: ['-10%', 'R$ 150'],
    image: starWars,
    title: 'StarWars',
  },
]

const Categories = () => (
  <>
    <ProductsList games={promocoes} title="RPG" background="gray" />
    <ProductsList games={emBreve} title="Ação" background="black" />
    <ProductsList games={promocoes} title="Aventura" background="gray" />
    <ProductsList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
