const navigation = [
  {
    name: 'About',
    href: '#'
  },
  {
    name: 'Shop',
    href: '#'
  },
  {
    name: 'Terms and Services',
    href: '#'
  },
  {
    name: 'Sitemap',
    href: '#'
  },
]

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center">
          {
            navigation.map((item, i)=> (
              <div className="px-6 py-2" key={i}>
                <a href={item.href} className="text-gray-500 hover:text-gray-900"> {item.name} </a>
              </div>
            ))
          }
        </nav>
      
};

export default Footer;
