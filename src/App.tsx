import { Car, Phone, Mail, MapPin, Clock, Users, Award, Star, CheckCircle, Calendar, BookOpen, MessageCircle, Instagram, Facebook, Menu, X, Bike, Zap } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeVehicleType, setActiveVehicleType] = useState<'car' | 'motorcycle'>('car');

  const carVehicles = [
    {
      name: 'VW Golf 8',
      type: 'Schaltgetriebe',
      classes: 'Klasse B',
      icon: Car
    },
    {
      name: 'VW ID4 GTX',
      type: 'Automatikgetriebe',
      classes: 'Klasse B197',
      icon: Zap
    }
  ];

  const motorcycleVehicles = [
    {
      name: 'KTM Duke 790',
      type: 'Klasse A',
      description: 'Für den offenen Motorradführerschein'
    },
    {
      name: 'KTM Duke 390',
      type: 'Klasse A2',
      description: 'Perfekt für Einsteiger'
    },
    {
      name: 'KTM Duke 125',
      type: 'Klasse A1 & B196',
      description: 'Ideal für junge Fahrer'
    }
  ];

  const licenseClasses = [
    {
      class: 'B / BE',
      title: 'PKW-Führerschein',
      description: 'Der klassische Autoführerschein für PKW und leichte Anhänger',
      icon: Car
    },
    {
      class: 'A / A2 / A1',
      title: 'Motorrad-Führerschein',
      description: 'Alle Motorradklassen von 125ccm bis zur offenen Klasse',
      icon: Bike
    },
    {
      class: 'AM',
      title: 'Roller & Moped',
      description: 'Für Kleinkrafträder und leichte Zweiräder',
      icon: Bike
    },
    {
      class: 'B196',
      title: '125ccm Erweiterung',
      description: 'Motorräder bis 125ccm mit bestehendem PKW-Führerschein',
      icon: Bike
    },
    {
      class: 'B197',
      title: 'Automatik-Ausbildung',
      description: 'PKW-Führerschein mit Automatikgetriebe',
      icon: Zap
    }
  ];

  const services = [
    { icon: BookOpen, title: 'Theorieunterricht', description: 'Montag, Mittwoch, Donnerstag 18:30-20:00 Uhr und Freitag 10:00-11:30 Uhr' },
    { icon: Car, title: 'Praktische Ausbildung', description: 'Moderne Fahrzeuge und erfahrene Fahrlehrer' },
    { icon: Users, title: 'Aufbauseminare', description: 'Seminare für Fahranfänger zur Vertiefung' },
    { icon: CheckCircle, title: 'Behördengänge', description: 'Wir kümmern uns um die Bürokratie bei der Zulassung' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 p-2.5 rounded-xl shadow-lg">
                <Car className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Eric's Fahrschule</h1>
                <p className="text-xs text-gray-600">Aachen</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#start" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors">Startseite</a>
              <a href="#ueber-uns" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors">Über uns</a>
              <a href="#fahrzeuge" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors">Ausbildungsfahrzeuge</a>
              <a href="#seminare" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors">Aufbauseminare</a>
              <a href="#kontakt" className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                Kontakt
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-3">
                <a href="#start" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors py-2">Startseite</a>
                <a href="#ueber-uns" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors py-2">Über uns</a>
                <a href="#fahrzeuge" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors py-2">Ausbildungsfahrzeuge</a>
                <a href="#seminare" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors py-2">Aufbauseminare</a>
                <a href="#kontakt" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors py-2">Kontakt</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="start" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
                <Award className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-semibold text-orange-900">Professionelle Fahrausbildung</span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Dein Führerschein in <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Aachen</span>
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Bei Eric's Fahrschule bekommst du eine erstklassige Ausbildung mit modernen Fahrzeugen. Von PKW bis Motorrad – wir machen dich fit für die Straße.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a href="#kontakt" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center space-x-2">
                  <span>Jetzt anmelden</span>
                  <CheckCircle className="w-5 h-5" />
                </a>
                <a href="#fahrzeuge" className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold border-2 border-gray-200 hover:border-orange-500 hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                  Unsere Fahrzeuge
                </a>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Car className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">B / BE</div>
                    <div className="text-sm text-gray-600">PKW-Führerschein</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Bike className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">A / A2 / A1</div>
                    <div className="text-sm text-gray-600">Motorrad</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-8">
                  <Clock className="w-20 h-20 text-orange-600 mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Öffnungszeiten</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Mo - Do</span>
                      <span className="text-gray-600">10:00 - 12:30<br/>15:30 - 18:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Freitag</span>
                      <span className="text-gray-600">15:30 - 18:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Sa & So</span>
                      <span className="text-gray-600">Geschlossen</span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Theorie-Zeiten</h4>
                    <p className="text-sm text-gray-600">Mo, Mi, Do: 18:30 - 20:00 Uhr</p>
                    <p className="text-sm text-gray-600">Freitag: 10:00 - 11:30 Uhr</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 rounded-2xl p-6 shadow-xl transform rotate-3">
                <Star className="w-8 h-8 text-yellow-800" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* License Classes Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Führerscheinklassen</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Wir bieten Ausbildung für alle gängigen Führerscheinklassen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {licenseClasses.map((license, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 hover:border-orange-500 hover:shadow-xl transition-all duration-300 group">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <license.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-orange-600 font-bold text-sm mb-2">{license.class}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{license.title}</h3>
                <p className="text-gray-600 leading-relaxed">{license.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicles Section */}
      <section id="fahrzeuge" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Unsere Ausbildungsfahrzeuge</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern, sicher und perfekt für deine Ausbildung
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveVehicleType('car')}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-flex items-center space-x-2 ${
                activeVehicleType === 'car'
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-orange-500'
              }`}
            >
              <Car className="w-5 h-5" />
              <span>PKW</span>
            </button>
            <button
              onClick={() => setActiveVehicleType('motorcycle')}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-flex items-center space-x-2 ${
                activeVehicleType === 'motorcycle'
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-orange-500'
              }`}
            >
              <Bike className="w-5 h-5" />
              <span>Motorräder</span>
            </button>
          </div>

          {activeVehicleType === 'car' ? (
            <div className="grid md:grid-cols-2 gap-8">
              {carVehicles.map((vehicle, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                  <div className="bg-gradient-to-br from-orange-500 to-red-600 h-48 flex items-center justify-center">
                    <vehicle.icon className="w-32 h-32 text-white/80" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
                    <p className="text-orange-600 font-semibold mb-3">{vehicle.type}</p>
                    <div className="bg-orange-50 px-4 py-2 rounded-lg inline-block">
                      <span className="text-sm font-semibold text-orange-900">{vehicle.classes}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {motorcycleVehicles.map((vehicle, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                  <div className="bg-gradient-to-br from-orange-500 to-red-600 h-48 flex items-center justify-center">
                    <Bike className="w-24 h-24 text-white/80" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
                    <p className="text-orange-600 font-semibold mb-3">{vehicle.type}</p>
                    <p className="text-gray-600 text-sm">{vehicle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section id="ueber-uns" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Unsere Leistungen</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Alles für deinen Führerschein – von Theorie bis Praxis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 hover:border-orange-500 hover:shadow-xl transition-all duration-300 group">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seminars Section */}
      <section id="seminare" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
                <Users className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-semibold text-orange-900">Für Fahranfänger</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Aufbauseminare</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Spezielle Seminare für Fahranfänger zur Vertiefung und Verbesserung der Fahrkompetenz. Professionelle Betreuung in kleinen Gruppen.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Vertiefung der Fahrkompetenz',
                  'Gefahrensituationen meistern',
                  'Sicheres Fahren im Alltag',
                  'Kleine Gruppen für intensive Betreuung'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#kontakt" className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                <span>Mehr erfahren</span>
                <BookOpen className="w-5 h-5" />
              </a>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Weitere Services</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Behördengänge</h4>
                    <p className="text-gray-600 text-sm">Wir kümmern uns um die komplette Bürokratie bei der Fahrzeugzulassung und allen notwendigen Anträgen.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                    <Calendar className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Flexible Termine</h4>
                    <p className="text-gray-600 text-sm">Fahrstunden zu den Zeiten, die zu deinem Leben passen – auch am Wochenende möglich.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Kontakt</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Komm vorbei oder kontaktiere uns – wir freuen uns auf dich!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-8">Schreib uns eine Nachricht</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                    placeholder="Dein Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">E-Mail</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                    placeholder="deine@email.de"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Telefon</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                    placeholder="Deine Telefonnummer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Nachricht</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all resize-none"
                    placeholder="Deine Nachricht an uns..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-white text-orange-600 rounded-full font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
                >
                  Nachricht senden
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Kontaktinformationen</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                      <MapPin className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Adresse</h4>
                      <p className="text-gray-600">Seilgraben 31, Aachen</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                      <Phone className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                      <p className="text-gray-600">024194303500</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                      <Mail className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">E-Mail</h4>
                      <p className="text-gray-600">info@ericsfahrschule.de</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Öffnungszeiten</h4>
                      <p className="text-gray-600 text-sm">Mo-Do: 10:00-12:30, 15:30-18:00</p>
                      <p className="text-gray-600 text-sm">Fr: 15:30-18:00</p>
                      <p className="text-gray-600 text-sm">Sa-So: Geschlossen</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Social Media</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/ericsfahrschule"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-xl hover:shadow-xl transform hover:scale-110 transition-all duration-200"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/ericsfahrschule"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-xl hover:shadow-xl transform hover:scale-110 transition-all duration-200"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@ericsfahrschule"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-xl hover:shadow-xl transform hover:scale-110 transition-all duration-200"
                  >
                    <MessageCircle className="w-6 h-6" />
                  </a>
                </div>
                <p className="text-gray-600 mt-4">
                  Folge uns für News, Tipps und Updates!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 p-2 rounded-xl">
                  <Car className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Eric's Fahrschule</h3>
                  <p className="text-sm text-gray-400">Aachen</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Professionelle Fahrausbildung für PKW und Motorrad.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#start" className="hover:text-orange-500 transition-colors">Startseite</a></li>
                <li><a href="#ueber-uns" className="hover:text-orange-500 transition-colors">Über uns</a></li>
                <li><a href="#fahrzeuge" className="hover:text-orange-500 transition-colors">Ausbildungsfahrzeuge</a></li>
                <li><a href="#seminare" className="hover:text-orange-500 transition-colors">Aufbauseminare</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Führerscheinklassen</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#fahrzeuge" className="hover:text-orange-500 transition-colors">Klasse B / BE</a></li>
                <li><a href="#fahrzeuge" className="hover:text-orange-500 transition-colors">Klasse A / A2 / A1</a></li>
                <li><a href="#fahrzeuge" className="hover:text-orange-500 transition-colors">Klasse AM</a></li>
                <li><a href="#fahrzeuge" className="hover:text-orange-500 transition-colors">B196 & B197</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Folge uns</h4>
              <div className="flex space-x-3 mb-4">
                <a
                  href="https://www.facebook.com/ericsfahrschule"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-lg hover:bg-orange-500 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/ericsfahrschule"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-lg hover:bg-orange-500 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@ericsfahrschule"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-lg hover:bg-orange-500 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2024 Eric's Fahrschule. Alle Rechte vorbehalten.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#impressum" className="hover:text-orange-500 transition-colors">Impressum</a>
              <a href="#datenschutz" className="hover:text-orange-500 transition-colors">Datenschutzerklärung</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
