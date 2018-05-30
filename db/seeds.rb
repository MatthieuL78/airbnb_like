# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'


urls = [
  "https://i.ytimg.com/vi/B-6OfUpX1ig/maxresdefault.jpg",
  "https://i.skyrock.net/7580/89647580/pics/3192684289_1_2_mwLq5BBT.jpg",
  "https://storage.gra1.cloud.ovh.net/v1/AUTH_10e1a9235c63431c95e5b84a247830db/prod/artwork/219181_1_m.jpg",
  "https://vignette.wikia.nocookie.net/dbz-vs/images/9/9c/Beerus-0.png/revision/latest?cb=20151206105013",
  "https://cdn-media.rtl.fr/cache/W9D7tnu9m1vIKSbQp454mQ/880v587-0/online/image/2012/1018/7753607556_isidore-alias-heathcliff-a-eu-droit-a-une-serie-animee-dans-les-annees-80.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/511aqSC4ffL.jpg",
  "https://pre00.deviantart.net/5978/th/pre/i/2013/138/b/9/billy_the_cat_by_mannydragon5-d65p3ar.jpg",
  "https://www.animationsource.org/sites_content/lion_king/upload/fanfic/html/_nala_au_temps_ou_scar_etait_roi_.jpg",
  "https://ih0.redbubble.net/image.477708317.0759/flat,800x800,070,f.jpg"
]

9.times do |i|
  Item.create(title: Faker::Name.name, description: Faker::Lorem.sentence, price: Faker::Number.decimal(2), image_url:urls[i])
end
