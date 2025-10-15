import { Car, Phone, Mail, MapPin, Clock, Users, Award, Star, CheckCircle, Calendar, BookOpen, MessageCircle, Instagram, Facebook, Menu, X } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLocation, setActiveLocation] = useState(0);

  const locations = [
    { name: 'Kreuzau', address: 'Stockheimer Weg 2', phone: '02422-1234' },
    { name: 'Düren/Niederau', address: 'Kreuzauer Str. 64', phone: '02421-5678' },
    { name: 'Düren', address: 'Weierstraße 19', phone: '02421-9012' },
    { name: 'Nideggen', address: 'Abendener Straße 2', phone: '02427-3456' },
    { name: 'MPU Büro Kreuzau', address: 'Bahnhofstr. 12', phone: '02422-7890' }
  ];

  const services = [
    { icon: BookOpen, title: 'Theorieunterricht', description: 'Multimedia, computeranimierter Unterricht bis zu 10x pro Woche' },
    { icon: Car, title: 'Fahrstunden', description: 'Praktische Ausbildung mit erfahrenen Fahrlehrern' },
    { icon: Calendar, title: 'Intensivkurse', description: 'Führerschein in nur 10 Tagen möglich' },
    { icon: Users, title: 'MPU-Vorbereitung', description: 'Professionelle Betreuung und Vorbereitung' },
    { icon: CheckCircle, title: 'Erste Hilfe Kurs', description: 'Alle wichtigen Grundlagen kompakt vermittelt' },
    { icon: Star, title: 'Probefahrt gratis', description: 'Unverbindliche Schnupperstunde für Neukunden' }
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
                <h1 className="text-xl font-bold text-gray-900">Fahrschule Jacobs</h1>
                <p className="text-xs text-gray-600">Seit 1987</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#theorie" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors">Theorie & Zeiten</a>
              <a href="#filialen" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors">Filialen</a>
              <a href="#team" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors">Team</a>
              <a href="#leistungen" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors">Leistungen</a>
              <a href="#bewertungen" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors">Bewertungen</a>
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
                <a href="#theorie" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors py-2">Theorie & Zeiten</a>
                <a href="#filialen" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors py-2">Filialen</a>
                <a href="#team" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors py-2">Team</a>
                <a href="#leistungen" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors py-2">Leistungen</a>
                <a href="#bewertungen" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors py-2">Bewertungen</a>
                <a href="#kontakt" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors py-2">Kontakt</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
                <Award className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-semibold text-orange-900">38 Jahre Erfahrung</span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Führerschein machen – <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">gut, schnell, easy</span>
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Bei Fahrschule Jacobs bringen wir dich sicher und entspannt zum Führerschein. Mit 5 Standorten im Kreis Düren und über 18.976 erfolgreichen Fahrschülern.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a href="#kontakt" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center space-x-2">
                  <span>Jetzt anmelden</span>
                  <CheckCircle className="w-5 h-5" />
                </a>
                <a href="#probefahrt" className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold border-2 border-gray-200 hover:border-orange-500 hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                  Gratis Probefahrt
                </a>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">18.976</div>
                    <div className="text-sm text-gray-600">Erfolgreiche Schüler</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">5</div>
                    <div className="text-sm text-gray-600">Standorte</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-8">
                  <Car className="w-20 h-20 text-orange-600 mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Intensivkurs verfügbar!</h3>
                  <p className="text-gray-600 mb-6">
                    Mach deinen Führerschein in nur 10 Tagen. Perfekt für alle, die es eilig haben.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Bis zu 10 Theoriestunden pro Woche</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Flexible Fahrstunden</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Erfahrene Fahrlehrer</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 rounded-2xl p-6 shadow-xl transform rotate-3">
                <Star className="w-8 h-8 text-yellow-800" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="leistungen" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Unsere Leistungen</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Von Theorie bis Praxis – wir begleiten dich auf deinem Weg zum Führerschein
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 hover:border-orange-500 hover:shadow-xl transition-all duration-300 group">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="filialen" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Unsere Filialen</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              5 Standorte im Kreis Düren – immer in deiner Nähe
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex flex-wrap gap-3 mb-8">
                {locations.map((location, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveLocation(index)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      activeLocation === index
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {location.name}
                  </button>
                ))}
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Adresse</h4>
                    <p className="text-gray-600">{locations[activeLocation].address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                    <p className="text-gray-600">{locations[activeLocation].phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Theorie-Zeiten</h4>
                    <p className="text-gray-600">Bis zu 10x pro Woche verfügbar</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Theoriethemen & Öffnungszeiten</h3>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Multimedia-Unterricht</h4>
                  <p className="text-white/90 text-sm">Computeranimiert und interaktiv für schnelleres Lernen</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Flexible Zeiten</h4>
                  <p className="text-white/90 text-sm">Bis zu 10 Theoriestunden pro Woche – passend zu deinem Zeitplan</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Alle Themen</h4>
                  <p className="text-white/90 text-sm">Komplette Theorie-Ausbildung nach aktuellen Richtlinien</p>
                </div>
              </div>
              <a href="#theorie" className="mt-6 inline-flex items-center space-x-2 bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                <span>Mehr erfahren</span>
                <BookOpen className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="bewertungen" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Das sagen unsere Fahrschüler</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Über 18.976 erfolgreiche Absolventen vertrauen uns
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah M.', text: 'Super Fahrschule! Die Lehrer sind geduldig und erklären alles sehr gut. Habe meinen Führerschein beim ersten Mal geschafft!' },
              { name: 'Tim K.', text: 'Der Intensivkurs war perfekt für mich. In 10 Tagen zum Führerschein – das hat wirklich funktioniert. Sehr empfehlenswert!' },
              { name: 'Lisa B.', text: 'Tolle Atmosphäre und moderne Unterrichtsmethoden. Die Theorie-Stunden mit den Animationen machen richtig Spaß.' }
            ].map((review, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 hover:border-orange-500 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-orange-500 to-red-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-600">Verifizierter Fahrschüler</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="#gaestebuch" className="inline-flex items-center space-x-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span>Alle Bewertungen ansehen</span>
            </a>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Unser Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Erfahrene Fahrlehrer mit Herz und Expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Hauptfahrlehrer', 'Fahrlehrer', 'Fahrlehrer', 'Fahrlehrer'].map((role, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 h-48 flex items-center justify-center">
                  <Users className="w-24 h-24 text-white/80" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Team Mitglied {index + 1}</h3>
                  <p className="text-orange-600 font-semibold mb-3">{role}</p>
                  <p className="text-gray-600 text-sm">Erfahren, professionell und mit Leidenschaft dabei</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MPU Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
                <Award className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-semibold text-orange-900">MPU-Beratung</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">MPU-Vorbereitung</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professionelle Unterstützung und individuelle Betreuung auf dem Weg zurück zum Führerschein. Unser erfahrenes Team bereitet dich optimal auf die MPU vor.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Einzelberatung und Gruppensitzungen',
                  'Erfahrene MPU-Berater',
                  'Individuelle Vorbereitung',
                  'Hohe Erfolgsquote'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#kontakt" className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                <span>Beratungstermin vereinbaren</span>
                <Calendar className="w-5 h-5" />
              </a>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">MPU Büro Kreuzau</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Adresse</h4>
                    <p className="text-gray-600">Bahnhofstr. 12, Kreuzau</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Kontakt</h4>
                    <p className="text-gray-600">02422-7890</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First Aid Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-12 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Erste Hilfe Kurs</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Pflichtprogramm für den Führerschein – bei uns lernst du alle wichtigen Grundlagen kompakt und praxisnah.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Kompakter Tageskurs',
                  'Qualifizierte Ausbilder',
                  'Praktische Übungen',
                  'Bescheinigung direkt am Ende'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#kontakt" className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                <span>Zum Kurs anmelden</span>
                <Calendar className="w-5 h-5" />
              </a>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Kursinformationen</h3>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Dauer</h4>
                  <p className="text-white/90">Ein Tagesworkshop</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Inhalte</h4>
                  <p className="text-white/90">Reanimation, Verbände, Notruf und mehr</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Gültigkeit</h4>
                  <p className="text-white/90">Lebenslang für Führerschein-Antrag</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Kontaktiere uns</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Starte jetzt deine Fahrausbildung – wir freuen uns auf dich!
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
                      <Phone className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                      <p className="text-gray-600">Rufe deine nächste Filiale an</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                      <Mail className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">E-Mail</h4>
                      <p className="text-gray-600">info@fahrschule-jacobs.de</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                      <MapPin className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Standorte</h4>
                      <p className="text-gray-600">5 Filialen im Kreis Düren</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Social Media</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/fahrschule.jacobs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-xl hover:shadow-xl transform hover:scale-110 transition-all duration-200"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/fahrschule_jacobs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-xl hover:shadow-xl transform hover:scale-110 transition-all duration-200"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
                <p className="text-gray-600 mt-4">
                  Folge uns für News, Tipps und Updates!
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border-2 border-green-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Gratis Probefahrt sichern!</h3>
                <p className="text-gray-600 mb-4">
                  Teste uns unverbindlich und erlebe die Fahrschule Jacobs live.
                </p>
                <a
                  href="#kontakt"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transform hover:scale-105 transition-all duration-200"
                >
                  <span>Jetzt Termin buchen</span>
                  <CheckCircle className="w-5 h-5" />
                </a>
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
                  <h3 className="font-bold text-lg">Fahrschule Jacobs</h3>
                  <p className="text-sm text-gray-400">Seit 1987</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Deine Fahrschule im Kreis Düren – gut, schnell, easy zum Führerschein.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#theorie" className="hover:text-orange-500 transition-colors">Theorie & Zeiten</a></li>
                <li><a href="#filialen" className="hover:text-orange-500 transition-colors">Filialen</a></li>
                <li><a href="#team" className="hover:text-orange-500 transition-colors">Team</a></li>
                <li><a href="#leistungen" className="hover:text-orange-500 transition-colors">Leistungen</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#bewertungen" className="hover:text-orange-500 transition-colors">Bewertungen</a></li>
                <li><a href="#gaestebuch" className="hover:text-orange-500 transition-colors">Gästebuch</a></li>
                <li><a href="#mpu" className="hover:text-orange-500 transition-colors">MPU-Vorbereitung</a></li>
                <li><a href="#erstehilfe" className="hover:text-orange-500 transition-colors">Erste Hilfe Kurs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Folge uns</h4>
              <div className="flex space-x-3 mb-4">
                <a
                  href="https://www.facebook.com/fahrschule.jacobs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-lg hover:bg-orange-500 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/fahrschule_jacobs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-lg hover:bg-orange-500 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2024 Fahrschule Jacobs. Alle Rechte vorbehalten.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#impressum" className="hover:text-orange-500 transition-colors">Impressum</a>
              <a href="#datenschutz" className="hover:text-orange-500 transition-colors">Datenschutz</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
