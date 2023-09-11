const catholicPrayers = [
    {
        name: "Ama Namin (Our Father)",
        content: "Ama Namin, sumasalangit Ka, Sambahin ang Ngalan Mo. Mapasaamin ang kaharian Mo. Sundin ang loob Mo dito sa lupa para nang sa langit. Bigyan Mo kami ngayon ng aming kakanin sa araw-araw. At patawarin Mo kami sa aming mga sala para nang pagpapatawad namin sa mga nagkakasala sa amin. At huwag Mo kaming ipahintulot sa tukso, kundi iadya Mo kami sa masama. Amen.",
        image: require('../assets/bg/prayer-8.webp')
    },
    {
        name: "Aba Ginoong Maria (Hail Mary)",
        content: "Aba Ginoong Maria, napupuno ka ng grasya, ang Panginoong Diyos ay sumasaiyo. Bukod kang pinagpala sa babaeng lahat, at pinagpala naman ang bunga ng iyong tiyan, Jesus. Santa Maria, Inang Diyos, ipanalangin mo kaming makasalanan, ngayon at kung kami'y mamamatay. Amen.",
        image: require('../assets/bg/prayer-12.jpg')
    },
    {
        name: "Luwalhati Sa Diyos (Glory Be / Doxology)",
        content: "Luwalhati sa Diyos Ama, sa Anak, at sa Espiritu Santo. Gaya noong unang-una, gayon pa rin ngayon, magpakailanman. Amen.",
        image: require('../assets/bg/prayer-14.webp')
    },
    {
        name: "Ang Pananampalataya ng mga Apostol (Apostles' Creed)",
        content: "Ako'y sumasampalataya sa Diyos Amang makapangyarihan sa lahat ng may gawa ng langit at lupa. At kay Hesukristo, ang kanyang Bugtong na Anak, ating Panginoon. Siyang nahayag sa pamamagitan ng Espiritu Santo, ipinanganak ni Santa Maria Virgen. Sa kanyang ilalim ni Poncio Pilato, ipinako sa krus, namatay at inilibing. Kinahulugan niya ang Impiyerno, at sa ikatlong araw ay muling nabuhay. Sumakay sa Langit, nakaluklok sa kanan ng Diyos Ama. Darating sa kaluwalhatian upang hukuman ang mga buhay at mga patay. Sumasampalataya ako sa Espiritu Santo, sa Banal na Iglesya Katolika, sa mga utos ng Diyos at sa mga aral ng Iglesya. Amen.",
        image: require('../assets/bg/prayer-15.webp')
    },
    {
        name: "Ang Panampalataya ng Nicene (Nicene Creed)",
        content: "Sumasampalataya kami sa iisang Diyos, Ama Amang makapangyarihan sa lahat, May-lalang ng langit at lupa, ng lahat ng bagay na nakikita at hindi nakikita. Isang Panginoon, Hesus Kristo, Bugtong na Anak ng Diyos, ipinanganak mula sa Ama bago pa man ang lahat ng mga bagay: Liwanag mula sa Liwanag, tunay na Diyos mula sa tunay na Diyos, na ipinanganak, hindi ginawa, kaisang kalikasan sa Diyos Ama; sa Kanya ginawa ang lahat ng mga bagay; Dahil sa amin at sa aming kaligtasan ay bumaba Siya mula sa Langit; at nagkatawang-tao Siya sa pamamagitan ng Espiritu Santo sa pamamagitan ng Birheng Maria at nagkaroon ng TAO. Siya'y ipinako sa krus para sa amin sa ilalim ni Poncio Pilato, Siya'y namatay at inilibing. At sa ikatlong araw, Siya'y muling nabuhay, ayon sa mga kasulatan; at umakyat Siya sa Langit, at nauupo sa kanan ng Diyos Ama; at sa muli niyang pagdating, na may kaluwalhatian, upang hukuman ang mga buhay at ang mga patay; at ang kanyang kaharian ay walang hanggan. Sumasampalataya ako sa Espiritu Santo, na Panginoon at tagapagbigay buhay, na lumalabas sa Ama at sa Anak; na kasama ng Ama at ng Anak ay sinusunod at sinasamba, at nililok na kasama ng mga propeta. Sumasampalataya ako sa iisang Banal, Katoliko, at Apostolikong Iglesya. Iniisa-isa ko ang isang Binyag para sa pagpapatawad ng mga kasalanan. Nananampalataya ako sa muling pagkabuhay ng mga patay, at sa buhay ng walang hanggan. Amen.",
        image: require('../assets/bg/prayer-15.webp')
    },
    {
        name: "Pagsisisi (Act of Contrition)",
        content: "O Diyos ko, ako'y lubos na nagsisisi sa lahat ng aking mga kasalanan, sapagkat ito'y laban sa Iyo, na aking minamahal nang buong kataimtiman, buong kaluluwa, at buong lakas. Ako'y labis na naghihinayang sa mga kasalanan ko sapagkat ako'y natatakot mawala ang langit at magdusa sa impiyerno. Ngunit higit sa lahat, iyo akong iniibig nang lubos, at malupit na sinasalanan ko ang Iyong malasakit. Ako'y may matibay na pasiya, sa Tulong ng Iyong biyaya, na ako'y magsusumpa sa aking mga kasalanan, magtutubos, at magbabagong-buhay. Amen.",
        image: require('../assets/bg/prayer-1.jpeg')
    },
    {
        name: "Aba Po Maria (Hail, Holy Queen / Salve Regina)",
        content: "Aba Po Maria, napupuno ka ng grasya, ang Panginoong Diyos ay sumasaiyo. Bukod kang pinagpala sa babaeng lahat, at pinagpala naman ang bunga ng iyong tiyan, Jesus. Santa Maria, Ina ng Diyos, ipanalangin mo kaming makasalanan, ngayon at kung kami'y mamamatay. Amen.",
        image: require('../assets/bg/prayer-5.jpg')
    },
    {
        name: "Ang Rosaryo (The Rosary)",
        content: `"Make the Sign of the Cross: Begin by making the Sign of the Cross while saying, "In the name of the Father, and of the Son, and of the Holy Spirit. Amen."

Recite the Apostle's Creed: Say the Apostle's Creed, a statement of Christian faith.

Say an Our Father: Recite the "Our Father" prayer (the Lord's Prayer).

Say Three Hail Marys: Say three "Hail Mary" prayers while meditating on the virtues of faith, hope, and charity.

Say the Glory Be: Recite the "Glory Be" prayer, giving glory to the Holy Trinity.

Announce the First Mystery: Announce the specific mystery for that day (e.g., Joyful, Sorrowful, Glorious, or Luminous).

Say the Our Father: Recite the "Our Father" prayer.

Say Ten Hail Marys: Say ten "Hail Mary" prayers while meditating on the mystery.

Say the Glory Be: Recite the "Glory Be" prayer.

Add the Fatima Prayer (Optional): Some people choose to add the Fatima Prayer: "O my Jesus, forgive us our sins, save us from the fires of hell, and lead all souls to Heaven, especially those in most need of your mercy."

Announce the Next Mystery: If you wish to continue praying the Rosary, announce the next mystery and repeat steps 7-10.

Conclude with the Hail Holy Queen: After completing the final mystery, recite the "Hail Holy Queen" prayer.

Make the Sign of the Cross: Finish the Rosary by making the Sign of the Cross again.

List of Rosary Mysteries and Their Respective Days:

Joyful Mysteries (Mondays and Saturdays):

The Annunciation
    The Visitation
    The Nativity
    The Presentation of Jesus in the Temple
    The Finding of Jesus in the Temple

Sorrowful Mysteries (Tuesdays and Fridays):
    The Agony in the Garden
    The Scourging at the Pillar
    The Crowning with Thorns
    The Carrying of the Cross
    The Crucifixion and Death of Jesus

Glorious Mysteries (Wednesdays and Sundays):
    The Resurrection
    The Ascension
    The Descent of the Holy Spirit (Pentecost)
    The Assumption of Mary into Heaven
    The Coronation of Mary as Queen of Heaven and Earth

Luminous Mysteries (Thursdays):
    The Baptism of Jesus in the Jordan River
    The Wedding at Cana (First Miracle)
    The Proclamation of the Kingdom of God
    The Transfiguration
    The Institution of the Holy Eucharist at the Last Supper`,
        image: require('../assets/bg/prayer-4.jpg')
    },
    {
        name: "Panalangin kay San Miguel Arkanghel (Prayer to St. Michael the Archangel)",
        content: "San Miguel Arkanghel, tanggol mo kami sa aming laban laban sa kasamaan at mga silo ng Diablo. Ipanalangin mo sa Diyos na ako'y iligtas at turuan kami sa aming tamang landas. Ipanalangin mo na ang Diyos ay sumaway sa masama. Sa mga mabubuting spiritu ng Diyos, aming asawa si San Miguel, Ipanalangin mo kami. Amen.",
        image: require('../assets/bg/prayer-16.jpg')
    },
    {
        name: "Ang Angelus",
        content: `"Angelus" (o "Orasyon ng Santo Anghel")
V: Ipinakilala ng Anghel ng Panginoon kay Maria.
R: At siya'y naglihi sa pamamagitan ng Espiritu Santo.
        
Abá, Maria, napupuno ka ng grasya, ang Panginoon ay sumasa iyo, bukod kang pinagpala sa babaeng lahat, at pinagpala naman ang bunga ng iyong tiyan na si Hesus. Santa Maria, Ina ng Diyos, ipanalangin mo kaming mga makasalanan, ngayon at kung kami'y mamamatay. Amen.

V: Narito ang alipin ng Panginoon.
R: Mangyari sa akin ang ayon sa iyong salita.

Abá, Maria...

V: At ang Verbo ay nagkatawang-tao.
R: At nanahan sa amin.

Abá, Maria...

V: Ipanalangin mo kami, Santa Ina ng Diyos.
R: Upang kami'y maging karapat-dapat sa mga pangako ni Kristo.

Ipanalangin mo kami, O Santa Ina ng Diyos.

(Nabanggit ang pangalan ng Ama, at ng Anak, at ng Espiritu Santo. Amen.)

(Note: Ito ay ang tradisyonal na bersyon ng dasal na Angelus sa Tagalog. Maaaring mayroong mga kaunting pagkakaiba-iba sa mga bersyon ng dasal depende sa rehiyon.)`,
image: require('../assets/bg/prayer-17.jpg')
    }
];

export default catholicPrayers;
