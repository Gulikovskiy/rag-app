import { ingestDocument } from "../lib/ingest";

const sampleText = "some text...";

ingestDocument("test-document", sampleText)
  .then(() => {
    console.log("Done!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

//   const sampleText = `
// Cristiano Ronaldo dos Santos Aveiro[a] (born 5 February 1985) is a Portuguese professional footballer who plays as a forward for and captains the Saudi Pro League club Al-Nassr and the Portugal national team. Widely regarded as one of the greatest players in history and the greatest Portuguese player ever, he has won numerous individual accolades throughout his career, including five Ballon d'Or awards, a record three UEFA Men's Player of the Year Awards, and four European Golden Shoes. He was named the world's best player five times by FIFA.[note 3]

// Nicknamed CR7, Ronaldo is one of the most decorated players in the history of professional football, having won 35 trophies in his career, including five UEFA Champions Leagues, two UEFA Nations Leagues and the UEFA European Championship. He holds the records for most goals (140) and assists (42) in the Champions League, most goals (14) and assists (8) in the European Championship, most international appearances (233), most men's international goals (146) and most international victories (141). He is the only player to have scored 100 goals with four different clubs and to finish as top scorer in four different domestic leagues. He has made over 1,300 professional career appearances, the most by an outfield player, and has scored over 970 official senior career goals for club and country, making him the top goalscorer of all time.

// Born in Funchal, Madeira, Ronaldo began his career with Sporting CP before signing with Manchester United in 2003. He gradually established himself as an integral player for the club, winning three consecutive Premier League titles, the 2007–08 Champions League, and the 2008 FIFA Club World Cup. For his performances in 2007–08, Ronaldo was awarded his first Ballon d'Or at age 23. In 2009, he joined Real Madrid in a deal worth €94 million (£80 million), which was the most expensive transfer in history at the time. He was at the forefront of Madrid's resurgence as a dominant European force, helping them win four Champions Leagues between 2014 and 2018, including the long-awaited La Décima in 2014, where he set the record for most goals scored in a Champions League season. With Madrid, he also won two La Liga titles, won the Ballon d'Or in 2013, 2014, 2016 and 2017, and became the club's all-time top goalscorer.

// Following issues with the hierarchy at Real Madrid, Ronaldo signed for Juventus in 2018 in a transfer worth a league record of €100 million, and was pivotal in winning two consecutive Serie A titles, the Coppa Italia, and the Capocannoniere in 2021 as the league's top scorer. In 2021, he returned to Manchester United, but his contract was terminated in 2022 after a public dispute with the club's management. Ronaldo joined Al-Nassr in 2023, and led them to the Saudi Pro League title in 2026, while also finishing as the league's top scorer in 2024 and 2025.

// Ronaldo made his international debut for Portugal in 2003 at the age of 18, and has earned more than 200 caps, making him history's most-capped male player.[7] He scored his first international goal in Euro 2004, where he helped Portugal reach the final. He assumed the captaincy of the national team ahead of Euro 2008, and led Portugal to their first major tournament title at Euro 2016. At Euro 2020, he received the Golden Boot as the top scorer. He won the UEFA Nations Leagues in 2019 and 2025, finishing as the top scorer in both the tournaments. In 2026, he became the first player to score in six World Cup tournaments.

// One of the world's most famous and marketable athletes, Ronaldo was ranked by Sportico as the third highest-paid athlete of all time in April 2026. In 2026, Ronaldo appeared on the Forbes World’s Billionaires list for the first time, with a net worth of $1.2B.[8] Time included him on their list of the 100 most influential people in the world in 2014. He is the most popular athlete on social media, with over 1 billion followers across Facebook, Twitter, YouTube and Instagram. Ronaldo was named in the UEFA Ultimate Team of the Year in 2015, the All-time UEFA Euro XI in 2016, and the Ballon d'Or Dream Team in 2020. In recognition of his record-breaking goalscoring success, he received special awards for Outstanding Career Achievement by FIFA in 2021.

// Early life
// Ronaldo was born on 5 February 1985 in the São Pedro parish of Funchal, the capital of the Portuguese island of Madeira, and he grew up in the nearby parish of Santo António.[9][10] His mother, Maria Dolores dos Santos Viveiros Aveiro, worked as a cook in the hospitality industry and as a cleaning woman.[11][12] His father, José Dinis Aveiro, was a municipal gardener at the Junta de Freguesia of Santo António and a part-time kit man for the football club Andorinha.[A] Ronaldo's father had served in the Portuguese Army during the Portuguese Colonial War and saw combat in Angola; he was traumatized by his experiences, which led to a lifelong struggle with alcoholism.[16]

// Ronaldo has an older brother, Hugo, and two older sisters, Elma and Liliana "Kátia" Cátia.[2] His father was an admirer of United States president Ronald Reagan, and named Ronaldo after him.[17] Ronaldo's mother revealed that she had wanted to abort him due to poverty, his father's alcoholism, and having too many children already, but her doctor refused to perform the procedure.[18][19] Ronaldo grew up in an impoverished Catholic home, sharing a room with all his siblings.[20] He idolised the Brazilian footballers Ronaldinho and Ronaldo during his youth.[21]

// As a child, Ronaldo played for Andorinha from 1992 to 1995, and later spent two years with Nacional.[22] In 1997, at age 12, he went on a three-day trial with Sporting CP, which signed him for a fee of £1,500.[23] He moved from Madeira to Lisbon to join Sporting CP's youth system,[23] and attended school at Escola EB2 de Telheiras, located in the city's Telheiras area.[24] While popular with other students, he struggled with his school responsibilities.[25][26] He was expelled after throwing a chair at his teacher, who he said had "disrespected" him.[27] A year later, he was diagnosed with tachycardia, a condition that threatened to end his football career.[28] He underwent cardiac ablation,[29] a type of heart surgery in which a laser is used to cauterise multiple cardiac pathways into one, which altered his resting heart rate.[30] He was discharged from the hospital hours after the procedure and resumed training a few days later.[31]

// By age 14, Ronaldo believed he had the ability to play football semi-professionally. He made an agreement with his mother and his Sporting CP tutor, Leonel Pontes,[32] to cease his education and focus entirely on football.[27][33] He did not complete schooling beyond the 6th grade.[34][35] In 2021, Ronaldo's mother stated in an interview that her son would have been a bricklayer if he had not become a professional football player.[36]

// Club career
// Main article: Career of Cristiano Ronaldo § Club career
// Sporting CP
// After impressing Sporting while playing for their youth teams, Ronaldo was promoted to the first team by manager László Bölöni. On 14 August 2002, at age 17, Ronaldo played his first official match for the first team, in a UEFA Champions League qualifying round against Inter Milan.[37] His Primeira Liga debut occurred a month later against Braga, and on 7 October he scored two goals against Moreirense in Sporting's 3–0 win.[38] After Sporting defeated Manchester United 3–1 in a friendly on 6 August 2003, United manager Alex Ferguson was determined to acquire Ronaldo, describing him as "one of the most exciting young players" he had ever seen.[39][40]

// Manchester United
// 2003–2007: Development and breakthrough
// On 12 August 2003, less than a week after the match that impressed Ferguson, Manchester United signed Ronaldo for £12 million,[41] an England record for a teenager.[42] This also made him the first Portuguese player to sign for the club.[43]

// Although he requested the number 28, his number at Sporting, he received the squad number 7 shirt, which had previously been worn by such United players as George Best, Eric Cantona and David Beckham.[44] Wearing the number 7 became an extra source of motivation for Ronaldo.[45] A key element in his development during his time in England proved to be Ferguson, of whom he later said: "He's been my father in sport, one of the most important and influential factors in my career."[46]

// Ronaldo playing for Manchester United against Chelsea during the 2005–06 Premier League season
// Ronaldo made his debut as a substitute in a 4–0 home win over Bolton Wanderers in the Premier League on 16 August 2003.[47] His performance earned praise from Best, who hailed it as "undoubtedly the most exciting debut" he had ever seen.[48] Ronaldo scored his first goal for Manchester United with a free-kick in a 3–0 win over Portsmouth on 1 November.[49] On 15 May 2004, in a victory against Aston Villa, Ronaldo scored the opening goal and later received the first red card of his career.[50][51] Ronaldo ended his first season in English football with a trophy, scoring the opening goal in United's 3–0 win over Millwall in the 2004 FA Cup Final.[52] BBC pundit Alan Hansen described him as the star of the final.[53] The British press had been critical of Ronaldo during the season for his "elaborate" step-overs in trying to beat opponents,[54] but teammate Gary Neville said he was "not a show pony, but the real thing", and predicted he would become a world-class player.[55]

// At the start of 2005, Ronaldo played two of his best matches of the 2004–05 season, producing a goal and an assist against Aston Villa and scoring twice against rivals Arsenal.[56][57] Ronaldo won his second trophy in English football, the Football League Cup, after scoring the third goal in United's 4–0 final win over Wigan Athletic.[58]

// During his third season in England, Ronaldo was involved in several incidents. Ronaldo clashed with a teammate, striker Ruud van Nistelrooy, who took offence at the winger's showboating style of play.[59] Following the 2006 FIFA World Cup, in which he was involved in an incident where club teammate Wayne Rooney was sent off,[60] Ronaldo publicly asked for a transfer, lamenting the lack of support he felt he had received from the club over the incident.[61] United denied the possibility of him leaving the club.[62] Although his World Cup altercation with Rooney resulted in Ronaldo being booed throughout the 2006–07 season,[63] it proved to be his break-out year, as he broke the 20-goal barrier for the first time and won his first Premier League title.[64]

// 2007–2009: Collective and individual success and Ballon d'Or

// Ronaldo (pictured during 2007-08) evolved into the best player in the world in this season, according to many pundits and fellow players.[65]
// In the 2006–07 season, he amassed a host of personal awards for the season, winning the Professional Footballers' Association's Player's Player, Fans' Player, Young Player of the Year awards, and the Football Writers' Association's Footballer of the Year award,[66][67] becoming the first player to win all four main PFA and FWA honours.[68] Ronaldo was named runner-up to Kaká for the 2007 Ballon d'Or,[69] and came third, behind Kaká and Lionel Messi, in the running for the 2007 FIFA World Player of the Year award.[70]

// Ronaldo scored his first hat-trick for United in a 6–0 win against Newcastle United on 12 January 2008.[71] His 31 league goals earned him the Premier League Golden Boot,[72] as well as the European Golden Shoe, which made him the first winger to win the latter award.[73] He additionally received the PFA Players' Player of the Year and FWA Footballer of the Year awards for the second consecutive season.[74][75] United reached the final against Chelsea in Moscow on 21 May, where, despite his opening goal being negated by an equaliser and his penalty kick being saved in the shoot-out,[76] United emerged victorious, winning 6–5 on penalties after a 1–1 draw at the end of 120 minutes.[77][78] As the Champions League top scorer, Ronaldo was named the UEFA Club Footballer of the Year.[79] With his 2008 Ballon d'Or and 2008 FIFA World Player of the Year, Ronaldo became United's first Ballon d'Or winner since Best in 1968,[80] and the first Premier League player to be named the FIFA World Player of the Year.[81]

// Shortly after, Ronaldo was linked to a move to Real Madrid, United filed a tampering complaint with governing body FIFA over Madrid's alleged pursuit of their player, but they declined to take action.[82] and he remained at United for another year.[83] His match-winning goal in the second leg against Porto, a 40-yard strike, earned him the inaugural FIFA Puskás Award, presented by FIFA in recognition of the best goal of the year;[84] he later called it the best goal he had ever scored.[85] United advanced to the final in Rome,[86] where he made little impact in United's 2–0 defeat to Barcelona.[87]

// Real Madrid
// 2009–2015: World record transfer and consecutive Ballon d'Or wins

// Ronaldo scored 33 goals in 35 appearances during his debut season at Real Madrid.
// In 2009, Ronaldo transferred to Real Madrid for a then world record £80 million.[88] At least 80,000 fans attended his presentation at the Santiago Bernabéu, surpassing the 25-year record of 75,000 fans who had welcomed Diego Maradona at Napoli.[89] Ronaldo said, "This is the completion of my boyhood dream, to be a Real Madrid player."[90]

// Ronaldo made his La Liga debut against Deportivo La Coruña on 29 August, scoring a penalty in a 3–2 home win.[91] He scored in each of his first four league games, the first Madrid player to do so.[92] His first Champions League goals for the club followed with two free kicks in the first group match against Zürich.[93] His strong start to the season was interrupted when he suffered an ankle injury in October while on international duty, which kept him sidelined for seven weeks.[94][95] Despite scoring 33 goals in all competitions and contributing to Real Madrid's 96 points in La Liga, his first season with Madrid ended trophyless.[96]

// Ronaldo scored 46 league goals during the La Liga championship success in his third season in Spain.
// Following Raúl's departure, Ronaldo was given No. 7 for the 2010–11 season and scored 53 goals, helping Madrid win the Copa del Rey, scoring the winning goal against rivals Barcelona in the El Clásico, his first trophy with Madrid.[97] He also became the first player in La Liga to score 40 goals.[98] In addition to the Pichichi Trophy, Ronaldo won the European Golden Shoe for a second time, becoming the first player to win the award in different leagues.[99]

// The following season saw Ronaldo score 60 goals across all competitions,[100] leading Madrid to their first league title in four years with a record 100 points and his runner-up finish to Lionel Messi in the 2011 FIFA Ballon d'Or.[101] He scored his 100th league goal for Madrid in a 5–1 win over Real Sociedad on 24 March 2012, breaking the previous club record held by Ferenc Puskás.[102] In the 2012–13 season, he scored his first hat-trick in the Champions League in a 4–1 win over Ajax.[103] Four days later, he became the first player to score in six successive Clásicos when he scored twice in a 2–2 draw at Camp Nou.[104] His performances again saw Ronaldo voted second in the running for the 2012 FIFA Ballon d'Or, behind four-time winner Messi.[105]

// Following the 2012–13 winter break, Ronaldo captained Madrid for the first time in an official match, scoring twice to lift 10-man Madrid to a 4–3 win over Sociedad on 6 January.[106] He subsequently became the first non-Spanish player in 60 years to captain Madrid in El Clásico on 30 January, a match which also marked his 500th club appearance.[107]

// Ronaldo scored a record 17 UEFA Champions League goals during the 2013–14 season en route to La Décima.
// In 2013–14 season, Ronaldo was joined at the club by winger Gareth Bale and together with striker Karim Benzema, they formed an attacking trio popularly dubbed "BBC", an acronym of Bale, Benzema and Cristiano, and a play on the name of the British public service broadcaster, the British Broadcasting Corporation (BBC).[108] He continued prolific scoring, with 69 goals in 2013, winning the 2013 FIFA Ballon d'Or,[109] and the FIFA World Player of the Year award, for the first time in his career.[110]

// Concurrently with his individual achievements, Ronaldo enjoyed his greatest team success in Spain to date, as he helped Madrid win La Décima, their tenth European Cup, scoring a penalty in the 120th minute of the 4–1 final win over city rivals Atlético Madrid, becoming the first player to score in two European Cup finals for two different winning teams.[111] As the competition's top goalscorer for the third time, with a record 17 goals,[112] he was named the UEFA Best Player in Europe.[113] Ronaldo scored 31 goals in 30 league games, which earned him the Pichichi and the European Golden Shoe, along with Liverpool's Luis Suárez.[114] On 4 May, Ronaldo scored a back-heeled volley in the closing moments of the match against Valencia, voted goal of the season by the Liga Nacional de Fútbol Profesional (LFP),[115] giving him the Best Player in La Liga award.[116]

// During the 2014–15 season, Ronaldo set a new personal best of 61 goals, and after winning the 2014 FIFA Club World Cup,[117] Ronaldo received the 2014 Ballon d'Or,[118] joining Johan Cruyff, Michel Platini and Marco van Basten as a three-time recipient.[119] Madrid finished in second place in La Liga and exited at the semi-final stage in the Champions League.[120] With 10 goals, he finished as top scorer for a third consecutive season, alongside Messi and Neymar.[121] On 5 April, he scored five goals in a game for the first time in his career, including an eight-minute hat-trick, in a 9–1 rout of Granada.[122] His 300th goal for his club followed three days later in a 2–0 win against Rayo Vallecano.[123] He finished the season with 48 goals, winning a second consecutive Pichichi and the European Golden Shoe for a record fourth time.[124]

// 2015–2018: All-time Champions League & Real Madrid top scorer and fifth Ballon d'Or

// Ronaldo in the 2018 UEFA Champions League Final, his final game for Real Madrid
// Cristiano Ronaldo became Real Madrid's all-time top scorer on 12 September 2015 against Espanyol, scoring 230 goals in 203 matches, surpassing the previous record holder, Raúl.[125] Ronaldo also became the all-time top scorer in the Champions League with a hat-trick in the first group match against Shakhtar Donetsk in the 2015–16 UEFA Champions League, having finished the previous season level with Messi on 77 goals.[126] Two goals against Malmö FF in a 2–0 away win on 30 September saw him reach the milestone of 500 career goals for club and country.[127] In the final, Ronaldo scored the winning goal in the penalty shoot-out against city rivals Atlético Madrid, winning his third Champions League title. He won the 2016 Ballon d'Or, his fourth, and the inaugural 2016 The Best FIFA Men's Player, a revival of the former FIFA World Player of the Year, largely owing to his success with Portugal in winning Euro 2016.[128]

// In the 2016–17 UEFA Champions League quarter-finals against Bayern in April, Ronaldo scored both goals in a 2–1 away win which saw him make history by becoming the first player to reach 100 goals in UEFA club competition.[129] On 17 May, Ronaldo overtook Jimmy Greaves as the all-time top scorer in the top five European leagues, scoring twice against Celta de Vigo.[130] He finished the season with 42 goals in all competitions as he helped Madrid to win their first La Liga title since 2012.[131]

// In the final, Ronaldo scored two goals in a 4–1 victory over Juventus to take him to 12 goals for the season, making him the competition's top goalscorer for the fifth straight season (sixth overall), as well as the first player to score in three finals in the Champions League era; the second goal was the 600th of his senior career.[132] Madrid also became the first team to win back-to-back finals in the Champions League era.[133]

// On 23 October, his performances throughout 2017 saw him awarded The Best FIFA Men's Player award for the second consecutive year.[134] A day later, Ronaldo won the 2017 Ballon d'Or, receiving his fifth-time award on the Eiffel Tower in Paris.[135] On 3 April 2018, Ronaldo scored the first two goals in a 3–0 away win against Juventus in the quarter-finals of the 2017–18 UEFA Champions League, with his second goal being an acrobatic bicycle kick. Described as a "PlayStation goal" by Juventus defender Andrea Barzagli, with Ronaldo's foot approximately 7 ft 7 in (2.31 m) off the ground, it garnered him a standing ovation from the opposing fans in the stadium as well as a plethora of plaudits from peers, pundits and coaches.[136]

// In the final on 26 May, Madrid defeated Liverpool 3–1, winning Ronaldo his fifth Champions League title, the first player to do so.[137] He finished as the top scorer of the tournament for the sixth consecutive season with 15 goals.[138] After the final, Ronaldo referred to his time with Madrid in the past tense, sparking speculation that he could leave the club.[139]

// Juventus
// 2018–2020: Consecutive Serie A titles

// Ronaldo playing for Juventus against Torino in November 2019
// Ronaldo joined Juventus in 2018 for €100 million, the transfer was the highest ever for a player over 30 years old and the highest paid by an Italian club.[140] Upon signing, Ronaldo cited his need for a new challenge as his rationale for departing Madrid,[141] but later attributed the transfer to the lack of support he felt was shown by club president Florentino Pérez.[142] On 18 August, Ronaldo made his debut in a 3–2 away win against Chievo Verona.[143] On 19 September, in his first Champions League match for Juve, he was sent off against Valencia, his first red card in 154 Champions League appearances.[144] In the reverse (home) leg against Valencia, Cristiano won 100 Champions League matches, becoming the first ever player to do so.[145]

// Ronaldo won his first trophy with the club on 16 January 2019, the 2018 Supercoppa Italiana, after he scored the only goal from a header against AC Milan.[146] On 10 February, Ronaldo scored in a 3–0 win over Sassuolo, the ninth consecutive away game in which he had scored in the league, equalling Giuseppe Signori's single season Serie A record of most consecutive away games with at least one goal.[147] On 12 March, Ronaldo scored a hat-trick in a 3–0 home win against Atlético in the second leg of the Champions League round of 16, helping Juventus overcome a two-goal deficit to reach the quarter-finals.[148] On 20 April, Ronaldo played in the scudetto clinching game against Fiorentina, as Juventus won their eighth successive title after a 2–1 home win, thereby becoming the first player to win league titles in England, Spain and Italy.[149] With 21 goals and eight assists, Ronaldo won the league award for Most Valuable Player.[150]

// On 1 October, he reached several milestones in Juventus's 3–0 Champions League group stage win over Bayer Leverkusen including breaking Iker Casillas' record for most Champions League wins of all time.[151] On 18 December, Ronaldo leapt to a height of 8 ft 5 in (2.57 m), higher than the crossbar, to head the winning goal in a 2–1 away win against Sampdoria.[152] He scored his first Serie A hat-trick on 6 January 2020, in a 4–0 home win against Cagliari and became only the second player to score hat-tricks in the Premier League, La Liga and Serie A.[153] On 22 February, Ronaldo scored for a record-equalling 11th consecutive league game, alongside Gabriel Batistuta and Fabio Quagliarella, in what was his 1,000th senior professional game, a 2–1 away win against SPAL.[154] On 22 June, he scored a penalty in a 2–0 away win over Bologna, overtaking Rui Costa to become the highest scoring Portuguese player in Serie A history.[155] On 20 July, Ronaldo scored twice in a 2–1 home win over Lazio; his first goal was his 50th in Serie A. He became the first player in history to reach 50 goals in the Premier League, La Liga and Serie A, and becoming the second player after Edin Džeko to score 50 goals in three of Europe's top five major leagues.[156] Moreover, he became the oldest player, at the age of 35 years and 166 days, to score over 30 goals in one of the five top European leagues since Ronnie Rooke with Arsenal in 1948.[157] On 26 July, Ronaldo scored the opening goal in a 2–0 home win over Sampdoria as Juventus were crowned Serie A champions for a ninth consecutive time.[158] On 7 August, Ronaldo scored two goals in a 2–1 home win against Lyon in the second leg of the Champions League round of 16, which saw him finish the season with 37 goals in all competitions; the tally allowed him to break Borel's club record of 36 goals in a single season.[159]

// 2020–2021: 100 Juve goals, Capocannoniere, and departure
// Ronaldo played his 100th match in all competitions for Juventus on 13 December, scoring two penalties in a 3–1 away win over Genoa in the league to bring his goal tally to 79.[160] On 2 March 2021, he scored a goal in a 3–0 win over Spezia in his 600th league match, to become the first player to score at least 20 goals in 12 consecutive seasons in the top five leagues of Europe.[161] On 12 May, Ronaldo scored a goal in a 3–1 away win over Sassuolo to reach his 100th goal for Juventus in all competitions on his 131st appearance, becoming the fastest Juventus player to achieve the feat.[162] With Juventus's victory in the 2021 Coppa Italia Final on 19 May, Ronaldo became the first player in history to win every major domestic trophy in England, Spain and Italy.[163] Ronaldo ended the season with 29 league goals, winning the Capocannoniere award for highest goalscorer and becoming the first footballer to finish as top scorer in the English, Spanish and Italian leagues.[164]

// The start of the following season came amid reports Ronaldo would depart the club before the closure of the transfer window,[165] despite Ronaldo and his agent Jorge Mendes reaching a verbal agreement with Manchester City over personal terms,[166] but the club pulled out of the deal,[167] and later it was confirmed that City's rivals Manchester United, Ronaldo's former club, were in advanced talks to sign him,[168][169] while former manager Alex Ferguson and several ex-teammates had been in contact to persuade him to re-sign for United.[170][171]

// Return to Manchester United
// 2021–2023: Champions League appearances record and 100 Premier League goals

// Ronaldo in a Premier League match against Newcastle in September 2021, his first game back at Manchester United
// On 27 August 2021, Manchester United announced they had reached an agreement with Juventus to re-sign Ronaldo, subject to agreement of personal terms, visa and medical.[172][173] Ronaldo was given the number 7 shirt after Edinson Cavani agreed to switch to 21.[174] The first 24 hours of Ronaldo's shirt sales was reported to have broken the all-time record following a transfer, overtaking Messi after his move to Paris Saint-Germain.[175]

// On 11 September, Ronaldo made his second debut at Old Trafford, scoring the opening two goals in a 4–1 league victory against Newcastle United.[176] On 29 September, he scored a last-minute winner in United's 2–1 victory at home to Villarreal in the Champions League, and overtook Iker Casillas as the player with the most appearances in the competition.[177] Ronaldo proved to be crucial in the next Champions League fixtures, scoring various last-minute goals to help United qualify for the round of 16 as group winners.[178] On 2 December, Ronaldo scored two goals in a 3–2 home league win against Arsenal, which saw him surpass 800 career goals.[179] Struggles ensued, with a fractured relationship with his teammates and interim manager, continuing for two months,[180] until he scored in United's 2–0 win at home versus Brighton & Hove Albion on 15 February 2022, his first in the new year.[181] He finished the season with 24 goals in all competitions being named in the Premier League Team of the Year and the winner of United's Sir Matt Busby Player of the Year award,[182][183] but United finished in a disappointing sixth place and qualified for the UEFA Europa League; as a result, Ronaldo went trophyless for the first time since 2010.[184]

// After growing dissatisfaction with the direction of United on and off the field, Ronaldo desired to leave to join a club competing in the Champions League, but a move failed to materialise, with various European clubs refusing a transfer, due to his age, overall cost of a transfer and high wage demands.[185][186] Shortly after, he fell out with manager Erik ten Hag who used him as a substitute, leading United to terminate his contract on 22 November, following an interview with Piers Morgan, where Ronaldo said that he felt "betrayed" by Ten Hag and criticised the management of the club.[187]

// Al-Nassr
// 2023–present: "Revolution" in Asian Football and Saudi Pro League champion

// Ronaldo with Al-Nassr in September 2023
// On 30 December 2022, Saudi Arabian club Al-Nassr reached an agreement for Ronaldo to join the club, signing a contract until 2025.[188] Ronaldo received the highest football salary ever, at €200 million per year,[189][190] including a guaranteed football salary of €90 million, with commercial and sponsorship deals bringing his total annual salary to €200 million. He made his debut for Al-Nassr on 22 January 2023, as club captain, playing the full 90 minutes of a 1–0 win over Al-Ettifaq,[191] and scored his first goal in a 2–2 draw against Al-Fateh by converting a last-minute penalty.[192] On 9 February, Ronaldo scored all four goals in a 4–0 win over Al-Wehda, his first goal of the match being his 500th career league goal.[193] According to the BBC, Ronaldo's transfer to Al-Nassr led a "revolution" in Asian football, with many players from other leagues, particularly those in Europe, transferring to Saudi Pro League clubs for the 2023–24 season.[194][195][196]

// In the final of the Arab Club Champions Cup on 12 August, Ronaldo scored both goals as they defeated rivals Al-Hilal 2–1 after extra time. Ronaldo scored six goals in the competition.[197] At the close of the year, Ronaldo scored 54 goals in all competitions for Al-Nassr and Portugal, making him the outright top scorer in 2023, reaching the same goalscoring record as in 2016.[198][199] On 27 May 2024, in Al-Nassr's home fixture against Al-Ittihad, Ronaldo scored his 34th and 35th league goals of the campaign, surpassing Abderrazak Hamdallah's record for the most goals scored in a single Saudi Pro League season. He also became the first footballer to finish as top scorer in four different leagues: the English, Spanish, Italian and Saudi leagues.[200] On 31 May, in a 5–4 penalty shoot-out defeat to Al-Hilal in the 2024 King Cup final following a 1–1 draw after extra time (in which he scored his side's second spot kick), he equalled Rogério Ceni's record for most top-level matches by a male professional footballer (1,225).[201]

// Ronaldo training with Al-Nassr
// On 30 January 2025, he became the first player to reach 700 club-level wins, while also scoring a goal in a 2–1 away victory against Al Raed.[202] On 28 February, Ronaldo played his 100th match in all competitions for Al-Nassr, a 2–1 away loss to Al-Orobah.[203] On 26 May, he scored his 800th career club goal in a 3–2 away loss to Al Fateh on the final day of the season.[204] After the match, he hinted at his departure,[205] but ended up extending his contract with Al Nassr until 2027.[206] Despite that, he finished the 2024–25 season with 25 league goals, becoming the league's top scorer for a second consecutive time.[207]

// On 23 August, Ronaldo scored his 100th goal for Al-Nassr with a penalty, becoming the first player in history to reach the milestone of 100 goals for four different clubs.[208][209] In early February 2026, Ronaldo reportedly refused to play for Al‑Nassr in protest against Saudi Arabia's Public Investment Fund (PIF), citing concerns over the club's transfer strategy and competitive standing, despite being fully fit.[210] He returned to action, on 14 February, scoring a goal in a 2–0 away win over Al Fateh.[211] On 21 February, he scored twice in 4–0 victory over Al-Hazm, his first goal made him the first player in football history to score 500 career goals after turning 30 years old.[212] On 21 May, he scored twice in a 4–1 victory over Damac, securing his club's the Saudi Pro League title in the final match, marking Ronaldo's first league title win in five years and Al-Nassr's first league title since the 2018–19 season.[213]

// International career
// Main article: Career of Cristiano Ronaldo § International career

// Ronaldo, pictured playing against Germany at Euro 2012, was made captain for Portugal in 2008.
// At the age of 18, Ronaldo made his debut for Portugal as a substitute against Kazakhstan on 20 August 2003.[214] At UEFA Euro 2004, he scored his first international goal in a 2–1 group stage loss to Greece in his eighth international appearance.[215][216] Despite Portugal losing to Greece again in the final, Ronaldo made the team of the tournament, with two assists and two goals.[217] In the 2006 FIFA World Cup, at the age of 21 years and 132 days, Ronaldo became the youngest ever goalscorer for Portugal at a World Cup finals.[218] Portugal reached the semi-finals, where Portugal lost to France, with Ronaldo being booed during their defeat, due to an incident that occurred in the quarter-finals against England.[219] FIFA's Technical Study Group overlooked him for the tournament's Best Young Player award and handed it to Germany's Lukas Podolski, citing his behaviour as a factor in the decision.[220][221]

// On 6 February 2007, Cristiano captained Portugal for the first time in a friendly against Brazil.[222] He wore the number 7 shirt ahead of UEFA Euro 2008.[223] Despite scoring eight goals in qualifications,[224] the second-highest tally, he scored just one goal in the finals, the second goal of Portugal's 3–1 win in the group stage game against the Czech Republic. Portugal were eliminated in the quarter-finals after a 3–2 loss to Germany.[225]

// Ronaldo failed to score in 2010 World Cup qualifying.[220] He scored only one goal in the 2010 World Cup finals; despite this, he was named man of the match in all three group stage matches, against Ivory Coast, North Korea and Brazil.[226][227][228] His only goal of the tournament came in their 7–0 demolishing of North Korea, which was his first international goal in 16 months.[229]

// Two years later, in UEFA Euro 2012, Ronaldo was joint top scorer with three goals, enough for him to be included in the team of the tournament.[6] During qualification for the 2014 FIFA World Cup, Ronaldo scored eight goals. Despite this, Portugal did not qualify directly; Ronaldo scored all four goals against Sweden in the play-off to qualify.[230] At the tournament in Brazil, Ronaldo assisted a last-minute 2–2 equaliser against the United States,[231] and scored an 80th-minute winner in a 2–1 win over Ghana.[232]

// Ronaldo leaps in the air in Portugal's Euro 2016 quarter-final match against Poland.
// In 2016, Ronaldo led Portugal to their first-ever trophy at the UEFA Euro 2016, although he was subbed off in the 25th minute in the final against hosts France.[233] He received the Silver Boot as the second-highest goalscorer, which gave him his fourth Ballon d'Or later that year. With the win, Portugal qualified and made its only appearance in the FIFA Confederations Cup held in Russia, where they finished in third place, with Ronaldo being named man of the match in all three of Portugal's group stage matches.[234][235]

// In the 2018 World Cup, Ronaldo became the oldest player to score a hat-trick in a World Cup match, in a 3–3 draw against Spain.[236] The following match, Ronaldo scored the only goal in a 1–0 win against Morocco, breaking Puskás' record as the highest European goalscorer of all time, with 85 international goals.[237] For his performances in the tournament, Ronaldo was named in the World Cup Dream Team.[238]

// Ronaldo led Portugal to victory in the inaugural UEFA Nations League in 2019, receiving the top scorer award in the finals,[239] and received the Golden Boot as top scorer of Euro 2020. Ronaldo also became the first player to score at five European Championships.[240] On 23 June 2021, Ronaldo scored two goals in the Euro 2020 match against France, breaking the men's goalscoring record previously held by Ali Daei.[241]

// On 9 October, he scored the opening goal in a 3–0 friendly win over Qatar at the Estádio Algarve; with his 181st international appearance, he also overtook Sergio Ramos's record for the most international caps received by a European player.[242][243] In the following match against Luxembourg on 12 October, also played at the Estádio Algarve, Ronaldo scored a hat-trick in a 5–0 win for Portugal, thus becoming the first player to score 10 hat-tricks in men's international football.[244]

// Ronaldo during a group stage game against Uruguay at the 2022 World Cup
// In the 2022 World Cup, on 24 November, Ronaldo became the first male player to score at five World Cups, with a penalty against Ghana.[245] Following a dispute with manager Fernando Santos, after their last group game against South Korea, he was dropped from the starting line-up for Portugal's last 16 match, marking the first time since Euro 2008 that he had not started a game for Portugal in a major international tournament,[246] and the first time Portugal had started a knockout game without Ronaldo in the starting line-up at an international tournament since Euro 2000.[247]

// On 23 March 2023, Ronaldo scored two goals against Liechtenstein as he earned his 197th overall cap to become the most capped male footballer of all time.[248] On 20 June, Ronaldo made his 200th appearance for his national team, scoring the only goal of an away win over Iceland, in the Euro qualifiers, as he became the first player in the history of men's international football to make 200 appearances for his country.[249] On 16 October, Portugal secured first place in their qualifying group, following a 5–0 away victory over Bosnia and Herzegovina, with Ronaldo scoring twice.[250]

// With his start in Portugal's UEFA Euro 2024 opener against the Czech Republic, Ronaldo became the first player to feature in six European Championships, having previously been the first player to appear in five.[251] Later that year, on 5 September, he scored his 900th career goal in a 2–1 victory over Croatia in the UEFA Nations League.[252] On 15 November, Ronaldo broke the record of most international victories with 132, overtaking Sergio Ramos's record, following a 5–1 victory against Poland in the UEFA Nations League, where he scored twice.[253] On 8 June 2025, Ronaldo won his second Nations League title, helping Portugal defeat Spain in the final, scoring eight goals in nine games in the tournament.[254]

// On 14 October, Ronaldo scored twice in a 2–2 draw against Hungary in the 2026 World Cup qualifiers, reaching a record 41 goals in World Cup qualifying.[255] Ronaldo was sent off for elbowing defender Dara O'Shea in the back during Portugal's 2–0 loss to Ireland in the World Cup qualifiers in Dublin on 14 November.[256] FIFA issued a three-month ban and one year of probation as a result, though it did not result in him being suspended from playing in the World Cup.[257]

// On 19 May 2026, Ronaldo was selected in the 26-man Portugal squad for the 2026 FIFA World Cup, his joint-record sixth participation in the tournament.[258][259] In Portugal's second group match on 23 June, he scored twice in a 5–0 victory against Uzbekistan, becoming the first player to score in six FIFA World Cup tournaments and taking his World Cup tally to 10 goals, surpassing Portugal's previous record of nine goals set by Eusébio.[260] On 2 July, he scored his first World Cup knock-out stage goal from a penalty in a 2–1 over Croatia in the round of 32.[261] Four days later, Portugal were eliminated in the round of 16 following a 1–0 defeat to Spain, with Mikel Merino scoring the match-winning goal in stoppage time; the day prior to the match, Ronaldo had stated that this would be his final edition of the tournament, leading to speculation in the media over his future.[262][263] Overall, commentators thought Ronaldo's performance at the 2026 World Cup was ineffective and lacked impact.[264][265][266]

// In total, he scored 11 goals and provided two assists in 27 games across six editions of the World Cup, including three goals in the 2026 World Cup.[263]

// Player profile
// Style of play

// At his peak, Ronaldo was known for his exceptional speed, explosive shooting, flair and athleticism.[267]
// A versatile attacker, Ronaldo is capable of playing on either wing as well as through the centre of the pitch, and, while ostensibly right-footed, is very strong with both feet.[268] Tactically, Ronaldo has undergone several evolutions throughout his career. While at Sporting and during his first season at Manchester United, he was typically deployed as a traditional winger on the right side of midfield, where he regularly looked to deliver crosses into the penalty area. In this position, he was able to use his pace and acceleration, agility and technical skills to take on opponents in one-on-one situations. Ronaldo became noted for his dribbling and flair, often displaying an array of tricks and feints,[269][270] such as the step overs and so-called 'chops' that became his trademark;[271] he has also been known to use the flip-flap.[272]

// His strength and jumping ability, combined with his elevation, heading accuracy and height of 1.87 m (6 ft 1+1⁄2 in), give him an edge in winning aerial duels. These attributes allow him to function as a target-man and make him an aerial goal threat in the penalty area; consequently, many of his goals have been headers.[273][274][275] Ronaldo holds the record for the highest recorded jump in football history, measuring 2.93 metres (9 ft 7 in), which he achieved during a match against Manchester United while playing for Real Madrid in the round of 16 of the UEFA Champions League in 2013.[276] Allied with his increased stamina and work-rate, his goalscoring ability improved drastically on the left wing where he was given the positional freedom to move into the centre to finish attacks. He has also increasingly played a creative role for his team, often dropping deep to pick up the ball, participate in the build-up of plays and create chances for his teammates, courtesy of his vision and passing ability.[269][273]

// In his final seasons at United, Ronaldo played an even more attacking and central role, functioning both as a striker and as a supporting forward, or even as an attacking midfielder on occasion.[273] He developed into a prolific goalscorer, capable of finishing well both inside the penalty area and from distance with an accurate and powerful shot, courtesy of his striking ability.[273] An accurate penalty kick taker,[277] he also became a set piece specialist, renowned for his powerful, bending free kicks.[278] When taking free kicks, Ronaldo is known for using the knuckleball technique, which was developed by Juninho Pernambucano.[279] He also adopts a trademark stance before striking the ball, which involves him standing with his legs far apart.[280] Regarding Ronaldo's unique style of taking free kicks, former United assistant manager Mike Phelan commented: "People used to put the ball down, walk away, run up and hit it. He brought in a more dynamic showmanship. He places the ball down, the concentration level is high, he takes his certain amount of steps back so that his standing foot is in the perfect place to hit the ball in the sweet spot. He is the ultimate showman. He has that slight arrogance. When he pulls those shorts up and shows his thighs, he is saying 'All eyes on me' and this is going in. He understands the marketing side of it. The way he struts up and places it; the world is watching him."[281]

// As Ronaldo entered his thirties he dribbled less frequently,[282] instead transitioning into a "deadly poacher".[283]
// At Real Madrid, Ronaldo continued to play a more offensive role, while his creative and defensive duties became more limited, although not entirely diminished.[284] Initially deployed as a centre forward by managers Manuel Pellegrini and José Mourinho, he was later moved back onto the left wing, though in a free tactical role; this position allowed him to drift into the centre at will to get onto the end of crosses and score, or draw out defenders with his movement off the ball and leave space for teammates to exploit.[284][285][286] Madrid's counter-attacking style of play also allowed him to become a more efficient and consistent player, as evidenced by his record-breaking goalscoring feats. While he mainly drew praise in the media for his prolific goalscoring, Ronaldo also demonstrated his ability as an effective creator in this role.[287][288][289] This unique role has been described by pundits as that of a "false", "attacking", or "goalscoring winger", as Ronaldo effectively almost functioned as a striker at times with his central runs into the penalty area, despite actually playing on the left flank.[285][290] From 2013 onwards, under manager Carlo Ancelotti, he effectively adapted his style to the physical effects of ageing with increasingly reduced off-the-ball movement and general involvement, completing fewer dribbles and passes per game, and instead focusing on short-distance creating and goalscoring.[284][291][292] Since 2017, Ronaldo adapted his style of play yet again to become more of a free-roaming centre forward under manager Zinedine Zidane, a role in which he continued to excel and maintain a prolific goalscoring record; in this position, he earned praise in the media for his intelligent movement both on and off the ball, positional sense, link-up play and finishing, as well as his ability to lose or anticipate his markers, find space in the box and score from few touches or opportunities.[293][294][295]

// In his first season at Juventus, Ronaldo continued to play in a variety of different attacking roles under manager Massimiliano Allegri, depending on whom he was partnered with. While he had occupied an increasingly offensive role in his final years at Real Madrid, at times he functioned in a free role at Juventus, either as a lone striker or in his trademark role on the left wing, in a 4–2–3–1 or 4–3–3 formation, in which he often switched positions with Mario Mandžukić. In this role, he was also given licence to drop deep or even out wide onto the right flank to receive the ball, and be more involved in the build-up of plays; as such, aside from scoring goals himself, he began to take on opponents and create chances for other players with greater frequency than he had in his final seasons with Real Madrid. Off the ball, he was also capable of creating space for teammates with his movement and attacking runs into the box, or finishing off chances with his head or feet by getting onto the end of his teammates' crosses.[296][297] On occasion he also played in an attacking partnership alongside Mandžukić in a 4–3–1–2, 4–4–2, or 3–5–2 formation.[298][299][300] He continued to play a similar role in his second season with the club under manager Maurizio Sarri.[297]

// Reception and image

// A Portugal fan at the 2010 FIFA World Cup in South Africa holding a banner dedicated to Ronaldo
// Ronaldo is widely regarded as one of the two best players of his generation, alongside Argentina forward Lionel Messi.[301] Winning his first Ballon d'Or in 2008 by a record-high vote count at age 23, over the next decade Ronaldo has often featured in debates concerning who is the greatest player in history.[302] Acclaimed for his prolific and consistent goal-scoring,[303] he is considered a decisive player who is also a game changer,[304] especially in important and high-pressured situations.[305] In a 2018 article for Bleacher Report, former NBA star Steve Nash compared Ronaldo to Michael Jordan: "On the pitch, [Ronaldo's] learned how to make his play—less explosive in individual movements—more successful for the team, and in that, I see the greatness of Jordan." In the same article, Ronaldo was ranked first in the ranking of the 50 most influential people in sports culture for 2018.[306]

// "In the six years we had him, you just saw his game grow all the time, and he was a fantastic player. Now you see the complete player. His decision-making, his maturity, his experience, plus all the great skills he has got, they all make him the complete player."

// — Former manager Alex Ferguson, January 2013[307]
// Ronaldo is noted for his work ethic, elite body conditioning and dedication to improvement on the training pitch, as well being regarded as a natural leader.[308][309] On his longevity and "extraordinary commitment to physical preparation", Adam Bate of Sky Sports said: "Dedication is a huge part of staying at the top and Ronaldo's focus is perhaps unparalleled within the game."[282] While stating they were stylistically different players who shared an equal desire to score goals, former Brazil international Ronaldo praised Cristiano's approach to training, arguing that "there are so few players who take care of their body like he does. I trained because I had to, he does it because he loves it."[310] His drive and determination to succeed are fuelled by a desire to be talked about alongside other greats such as Pelé and Diego Maradona once retiring.[311] He is credited, along with his compatriot, coach José Mourinho, with inspiring changing fortunes of Portuguese football in 2010s and 2020s.[312] At times, he has been criticised for simulating when tackled.[313] He was also occasionally criticised early in his career by manager Alex Ferguson, teammates and the media for being a selfish or overly flamboyant player.[314] Jonathan Wilson of The Guardian opined that Ronaldo had made Juventus, who he joined aged 33 in 2018, weaker, due to "his relative immobility" in his mid-30s, even if his personal goal-scoring output remained high.[315]

// During his career, Ronaldo has also been described as having an "arrogant image" on the pitch,[316] with Ronaldo stating that he had become a "victim" because of how he was portrayed in the media.[317] He is often seen moaning, gesticulating and scowling while trying to inspire his team to victory,[316] with Ronaldo insisting that his competitive nature should not be mistaken for arrogance.[317] His managers, teammates and various journalists have said that this reputation has caused an unfair image of him.[318][319][320]

// Goal celebrations

// Ronaldo's "siu" celebration
// Ronaldo has adopted several goal celebrations throughout his career, including one particular celebration which gained widespread coverage in the media, when he squatted and stared directly into a camera on the sidelines of the pitch with his hand on his chin.[321][322][323] After scoring a goal, he usually celebrates with a "storming jump" and "turn", before "landing in spread-eagled fashion"[322] into his "signature power stance",[323] while usually simultaneously exclaiming "Sí" (Spanish and Italian for "yes").[321][324] This trademark celebration has been dubbed the "Siu" or "siuuu" in the media.[321][322][325]

// The gesture was first performed by Ronaldo on 7 August 2013, during the 2013 International Champions Cup Final between Real Madrid and Chelsea.[326] During an interview after the match, Ronaldo explained he scored the goal and "it just felt natural" and "didn't know where it came from". He started doing it more often and when the supporters see it they are reminded of him.[327]

// The phrase "siu" is derived from Portuguese sim, meaning "yes". This was confirmed by Ronaldo in an interview in 2023, almost a decade since he first performed it. Ronaldo explained that the phrase "Siuuu" simply means yes, but "meaning it very strongly".[328]

// Rivalry with Lionel Messi
// Main article: Messi–Ronaldo rivalry

// Ronaldo with Lionel Messi before an international friendly between Portugal and Argentina in 2011
// Both Ronaldo and Lionel Messi have scored in multiple UEFA Champions League finals, have regularly broken the 50-goal barrier in a single season, and are the two leading goal scorers in history. Sports journalists and pundits regularly weigh the individual merits of both players in an attempt to argue who they believe is the best player in modern football or in the history of the game.[329] It has been compared to several sports rivalries, among them the Muhammad Ali–Joe Frazier rivalry in boxing, the Borg–McEnroe rivalry in tennis and the Senna–Prost rivalry from Formula One motor racing.[330][331] Some commentators choose to analyse the differing physiques and playing styles of the two.[332] Part of the debate revolves around the contrasting personalities of the two players, as Ronaldo is sometimes depicted as an arrogant and theatrical showoff, while Messi is portrayed as a shy, humble character.[333][334][335]

// "It's part of my life now. People are bound to compare us. He tries to do his best for his club and for his national team, as I do, and there is a degree of rivalry with both of us trying to do the best for the teams we represent."

// — Ronaldo commenting on his rivalry with Messi.[336]
// In a 2012 interview, Ronaldo commented on the rivalry, saying: "I think we push each other sometimes in the competition, this is why the competition is so high."[337] Alex Ferguson, Ronaldo's manager during his time at Manchester United, opined: "I don't think the rivalry against each other bothers them. I think they have their own personal pride in terms of wanting to be the best."[338] Messi himself denied any rivalry, saying that it was "only the media, the press, who wants us to be at loggerheads but I've never fought with Cristiano."[339] Responding to the claims that he and Messi do not get on well on a personal level, Ronaldo commented: "We don't have a relationship outside the world of football, just as we don't with a lot of other players." Ronaldo added that in years to come he hopes they can laugh about it together, stating: "We have to look on this rivalry with a positive spirit, because it's a good thing."[336] Representing archrivals Barcelona and Real Madrid, the two players faced each other at least twice every season in the world's biggest club game, El Clásico, which is among the world's most viewed annual sporting events.[340]

// In a debate at Oxford Union in October 2013, when asked whether FIFA president Sepp Blatter preferred Messi or Ronaldo, Blatter paid tribute to the work ethic of the Argentine before taking a swipe at Ronaldo, claiming "one of them has more expenses for the hairdresser than the other." Real Madrid demanded and promptly received a full apology. In response to Blatter's "commander" on the pitch comment, Ronaldo issued his own riposte with a mock-salute celebration after scoring a penalty against Sevilla.[341] In August 2019, Ronaldo and Messi were interviewed while sat next to each other prior to the announcement of the UEFA Men's Player of the Year, with Ronaldo stating: "I pushed him and he pushed me as well. So it's good to be part of the history of football."[342]

// In September 2023, Ronaldo declared that his rivalry with Messi was over and "gone", after 36 official fixtures and 15 years of "sharing the stage".[343]

// In popular culture
// Popularity and online following
// Ronaldo was named in the 2014 Time 100, Time's annual list of the most influential people in the world.[344] ESPN named him the world's most famous athlete in 2016, 2017, 2018 and 2019.[B] Demand for a replica Ronaldo shirt has been high throughout his career. In 2008, Ronaldo's number 7 Manchester United shirt was the best-selling Premier League sports product.[349] In 2015, Ronaldo's number 7 Real Madrid shirt was the second best-selling worldwide, after Messi's number 10 Barcelona shirt.[350] In 2018, within 24 hours of his number 7 Juventus shirt being released, over 520,000 had been sold, with $62.4 million generated in one day.[351]

// Fans of Real Madrid (left; Ronaldo's then current club) and Manchester United (right; Ronaldo's then former club) wearing Ronaldo's 7 shirt at the 2017 UEFA Super Cup
// Ronaldo has established a strong online presence. The most popular sportsperson on social media, he counted over 500 million total followers across Facebook, Twitter and Instagram by February 2021, making him the first person to pass half a billion followers.[352] The most-followed person on Facebook (171 million), most-followed on Instagram (650 million) and most-followed sportsperson on Twitter (115 million), his sponsors earned $936 million in media value across his accounts between June 2016 and June 2017.[353]

// After announcing the creation of his YouTube channel, UR · Cristiano on 21 August 2024, it became the fastest to reach the 1 million subscribers milestone,[354] doing so in 90 minutes.[354][355][356][357] The channel also became the fastest to reach 5,[358] 10,[359] 20,[360] 30 and 50 million subscribers.[361] It also became the most subscribed channel in Portugal, surpassing the Portuguese Nick Jr.[362] As of June 2026, the channel has 80 million subscribers.

// Wealth and sponsorships
// In April 2026, Sportico ranked Ronaldo as the third highest-paid athlete in history, behind Michael Jordan and Tiger Woods, with his income estimated at $2.52 billion.[363][364] He has also been included in Sportico's every annual ranking of the highest-paid athletes: he was named the third highest-paid athlete of 2021 ($120 million) and 2022 ($115 million) and the highest-paid athlete of 2023 ($275 million), 2024 ($260 million) and 2025 ($260 million).[365][366][367][368] With earnings of €720 million (£615 million) from 2010 to 2019, Ronaldo was ranked second in Forbes list of the decade's highest-paid athletes, behind boxer Floyd Mayweather Jr.[369] Forbes ranked Ronaldo as the highest-paid athlete in the world in 2016 ($88 million), 2017 ($93 million) and from 2023 to 2025 ($136 million, $260 million and $275 million respectively), and he has entered every top 10 since the ranking's inception in 2012.[370][371][372][373][353] He is the first footballer and only the third sportsman to earn $1 billion in their career.[374]

// Ronaldo is one of the world's most marketable sportsmen: SportsPro rated him the fifth most marketable athlete in 2012[375] and eighth most marketable athlete in 2013.[375][376] Sports market research company Repucom named Ronaldo the most marketable and most recognised football player in the world in May 2014.[377] Since his reputation grew at Manchester United, Ronaldo has signed many sponsorship deals for consumer products, including sportswear, football boots; since November 2012, Ronaldo has worn the Nike Mercurial Vapor personalised CR7 edition,[378] soft drinks, clothing, automotive lubricants, financial services, electronics, and video games.[379][380][381][382] Ronaldo featured as the cover star of FIFA video game FIFA 18 and was heavily involved in the game's promotion.[383] His "Sii" goal celebration features in the FIFA series, accompanied with his own voiceover.[321] He was also the face of Pro Evolution Soccer, appearing on the covers of the 2008, 2012 and 2013 editions of the game.[384]

// Philanthropy
// Ronaldo has made contributions to various charitable causes throughout his career. Television footage of the 2004 Indian Ocean earthquake and tsunami showed an eight-year-old boy survivor named Martunis wearing a Portuguese football shirt who was stranded for 19 days after his family was killed. Following this, Ronaldo visited Aceh, Indonesia, to raise funds for rehabilitation and reconstruction.[385][386] After accepting undisclosed damages from a libel case against The Sun newspaper in 2008, Ronaldo donated the damages to a charity in Madeira.[387]

// In 2009, Ronaldo donated £100,000 to the hospital that saved his mother's life in Madeira following her battle with cancer, so that they could build a cancer centre on the island.[388] In support of the victims of the 2010 Madeira flood, Ronaldo pledged to play in a charity match in Madeira between Primeira Liga club Porto and players from Madeiran-based clubs Marítimo and Nacional.[389]

// In 2012, Ronaldo and his agent paid for specialist treatment for a nine-year-old Canarian boy with apparently terminal cancer.[390] In December 2012, Ronaldo joined FIFA's "11 for Health" programme to raise awareness among kids of how to steer clear of conditions including drug addiction, HIV, malaria, and obesity.[391] In January 2013, Ronaldo became Save the Children's new Global Artist Ambassador, in which he hopes to help fight child hunger and obesity.[392] In March 2013, Ronaldo agreed to be the ambassador for the Mangrove Care Forum Bali in Indonesia, an organisation aiming to raise awareness of mangrove conservation.[393]

// Ronaldo was named the world's most charitable sportsperson in 2015 after donating £5 million to the relief effort after the earthquake in Nepal which killed over 8,000 people.[394] In June 2016, Ronaldo donated the entirety of his €600,000 Champions League bonus after Real Madrid won the competition.[394] In August of the same year, Ronaldo launched CR7Selfie, a selfie app for charity to help Save the Children that lets participants take a selfie with him in one of several different outfits and poses.[395]

// Eponyms and honours
// See also: Academia Cristiano Ronaldo, Cristiano Ronaldo International Airport, Museu CR7, and Galaxy CR7

// The Cristiano Ronaldo Museum, Museu CR7, in Funchal, Madeira, opened in December 2013.
// In 2007, C.D. Nacional renamed its youth campus Cristiano Ronaldo Campus Futebol (Cristiano Ronaldo Football Campus).[396] In December 2013, Ronaldo opened a museum, Museu CR7, in his hometown of Funchal, Madeira, to house trophies and memorabilia;[397] the museum is an official sponsor of the local football team União da Madeira.[398][399] At a ceremony held at the Belém Palace in January 2014, President of Portugal Aníbal Cavaco Silva raised Ronaldo to the rank of Grand Officer of the Order of Prince Henry "to distinguish an athlete of world renown who has been a symbol of Portugal globally, contributing to the international projection of the country and setting an example of tenacity for future generations."[400] In June 2015, astronomers led by David Sobral from Lisbon and Leiden discovered a galaxy which they named Cosmos Redshift 7 (CR7) in tribute to Ronaldo.[401]

// On 23 July 2016, following Portugal's triumph at Euro 2016, Madeira Airport in Funchal was renamed as Cristiano Ronaldo International Airport.[402] The name change was subject to much debate locally by some politicians and citizens, who even started a petition against the move, an action criticised by President of Madeira Miguel Albuquerque.[403][404] On 21 September 2020, the Sporting CP's football academy in Alcochete, until then called Academia Sporting, was renamed Academia Cristiano Ronaldo.[405][406] In 2023, the Lisbon City Council approved awarding him, at the proposal of its president, Carlos Moedas, the Medal of Honor of the City, because he is "a great Lisboner, in the sense of the passion he has for the city".[407]

// Public art

// Public artwork of Ronaldo include a waxwork likeness in Madame Tussauds, London (left) and a bronze statue in Madeira (right), resembling the pose he strikes before taking free kicks.
// In June 2010, during the build-up to the World Cup, Ronaldo became the fourth footballer, after Steven Gerrard, Pelé, and David Beckham, to be represented as a waxwork at Madame Tussauds London.[408] Another waxwork of him was presented at the Madrid Wax Museum in December 2013.[409] A bronze statue of Ronaldo, designed by artist Ricardo Madeira Veloso, was unveiled in Funchal in December 2014.[410][411]

// The unveiling of the rebranded Cristiano Ronaldo International Airport took place on 29 March 2017, which included a bust of his head being presented.[404] The bust and the name change were controversial, with the lack of the bust's likeness to Ronaldo being ridiculed by comedians, including Saturday Night Live,[412][404] A year later, sports website Bleacher Report commissioned sculptor Emanuel Santos to create another bust;[413] however, this bust was never used and a new one was made by a Spanish sculptor, shown to the public on 15 June 2018.[414]

// Business ventures
// Ronaldo opened a fashion boutique under the name CR7 (his initials and shirt number) on the island of Madeira in 2006 and opened a second in Lisbon in 2008.[415] In partnership with Scandinavian manufacturer JBS Textile Group and the New York fashion designer Richard Chai, Ronaldo co-designed a range of underwear and sock line, released in November 2013.[416] He expanded his CR7 fashion brand by launching a line of premium shirts and shoes in July 2014.[417][418]

// In September 2015, Ronaldo released his own fragrance, "Legacy", in a partnership with Eden Parfums.[419] Since 26 October 2023, the new owners of Medialivre (Correio da Manhã, Record and Jornal de Negócios publisher) are a group of investors that include Cristiano Ronaldo through Portuguese company Expressão Livre.[420] In December 2011, he launched an iPhone game called Heads Up with Cristiano, created by developer RockLive,[421] and in December 2013, he launched Viva Ronaldo, a dedicated social networking website and app.[422]

// On 26 February 2026, Ronaldo acquired a 25% ownership stake in Spanish club UD Almería as part of his investment activities through CR7 Sports Investments, a subsidiary of CR7 S.A.[423]

// Ronaldo is the co-owner of AI-powered football training and entertainment facilities named Footlab.[424]

// Media
// Ronaldo's autobiography, titled Moments, was published in 2007.[425] His sponsor Castrol produced the television film Ronaldo: Tested to the Limit, in which he was physically and mentally tested in several areas; his physical performance was subject to scrutiny by world media upon the film's release in September 2011.[332] Cristiano Ronaldo: The World at His Feet, a documentary narrated by actor Benedict Cumberbatch, was released via Vimeo in June 2014.[426] A documentary film directed by Anthony Wonke about his life and career, titled Ronaldo, was released on 9 November 2015.[427][428] He appears as a playable character in the 2025 fighting game Fatal Fury: City of the Wolves.[429] In December 2025, it was confirmed that he will participate in the film Fast X: Part 2, from the Fast & Furious franchise.[430]

// Personal life
// Family, children, and relationships
// Ronaldo is a Catholic.[431] Within his ancestry, he is of (one-eighth) Cape Verdean descent through his great-grandmother.[432] Ronaldo's great-grandmother on his father's side, Isabel da Piedade, an African woman, was born in the island of São Vicente, in what was then Portuguese Cape Verde, and moved to the island of Madeira when she was 16.[433][434]

// His father, José, died of an alcoholism-related liver condition at age 52 in September 2005 when Ronaldo was 20.[435] After her son achieved fame in world football, Cristiano Ronaldo's mother, Dolores Aveiro, became a popular personality in Portugal to such an extent that advertising campaigns for well-known brands in the country, such as Maggi, MultiOpticas and Pingo Doce, have featured her in commercials.[436][437]

// Ronaldo has five living children. He first became a father to a son, Cristiano Ronaldo Jr., who was born on 17 June 2010 in the United States.[438] He has full custody of the child and has not publicly revealed the identity of the mother per an agreement with her.[439][440] Ronaldo Jr. is a youth footballer who plays for Portugal Under-15s.[441] Ronaldo is also a father to twins, born on 8 June 2017 in the United States via surrogacy.[442]

// Ronaldo was in a relationship with Russian model Irina Shayk from 2010 to 2015.[443] He is currently in a relationship with Argentine-Spanish model Georgina Rodríguez,[444] who gave birth to a daughter on 12 November 2017.[445] The couple expected another set of twins in 2022. The male twin died during childbirth while the female twin survived.[446] On 11 August 2025, Rodríguez announced their engagement via Instagram.[447]

// Health
// Ronaldo has said that he does not drink alcohol,[387] and he received libel damages over a Daily Mirror article that reported him drinking heavily in a nightclub while recovering from an injury in July 2008.[448] He also does not have any tattoos, as he regularly donates blood and bone marrow.[449]

// Legal issues
// In 2007, Ronaldo pled guilty to driving 60 mph in a 40 mph zone in 2006 and was fined £1,000 and given 6 penalty points on his licence for speeding.[450] In July 2017, Ronaldo was charged with fraudulently evading almost €15 million in tax between 2011 and 2014, a claim he denied at the time.[451] In June 2018, Ronaldo was given a two-year suspended jail sentence and fined €18.8 million, later reduced to €16.8 million after reaching a deal with Spanish authorities. The sentence was served under probation, without any jail time, so long as he did not re-offend.[452]

// Ronaldo and another man were investigated by the British Crown Prosecution Service after a 2005 rape allegation was brought forward by two women. Within days, the two women withdrew their allegation, and Scotland Yard later issued a statement declaring there was not enough evidence for a prosecution.[453]

// In April 2017, it was reported that Ronaldo was being investigated by the Las Vegas Police Department for an allegation by a woman that he had raped her in 2009.[454][455] Documents, confirmed by Ronaldo's lawyers, state that Ronaldo paid a woman US$375,000 in a non-disclosure settlement.[454][456] Ronaldo and his lawyers issued a lengthy statement denying all accusations, describing them as an "intentional defamation campaign" with parts significantly "altered and/or completely fabricated",[457][458] a claim which Der Spiegel categorically denied.[459]

// In July 2019, Las Vegas prosecutors said they would not charge Ronaldo over allegations of rape; the statement added: "Based upon a review of information at this time, the allegations of sexual assault against Cristiano Ronaldo cannot be proven beyond a reasonable doubt."[460] The same woman, in September 2018, filed a civil lawsuit in Nevada accusing Ronaldo of rape.[461] The Daily Mirror, citing court documents, reported in 2021 that the woman sought £56 million in damages from Ronaldo.[462]

// In October 2021, federal magistrate judge Daniel Albregts recommended that the lawsuit be dismissed, citing that the woman's lawyer, Leslie Stovall, "acted in bad faith by asking for, receiving, and using Football Leaks documents to prosecute" the case, despite the documents containing "privileged communications" between Ronaldo and his lawyers. Additionally, Albregts stated that no evidence was found of Ronaldo's lawyers having "intimidated [the woman] or impeded law enforcement" during the 2010 settlement with her.[463] In June 2022, the woman's rape lawsuit was dismissed with prejudice in the United States District Court for the District of Nevada, as district judge Jennifer A. Dorsey ruled that Stovall's repeated use of "cyber-hacked attorney–client privileged documents" were actions representing "abuses and flagrant circumvention of the proper litigation process".[461][464]

// Ronaldo with U.S. President Donald Trump at the White House in 2025
// Career statistics
// Club
// As of match played 21 May 2026[465][216]
// Appearances and goals by club, season and competition
// Club	Season	League	National cup[b]	League cup[c]	Continental	Other	Total
// Division	Apps	Goals	Apps	Goals	Apps	Goals	Apps	Goals	Apps	Goals	Apps	Goals
// Sporting CP B[466][467]	2002–03	Segunda Divisão B	2	0	—	—	—	—	2	0
// Sporting CP	2002–03	Primeira Liga	25	3	3	2	—	3[d]	0	—	31	5
// Manchester United	2003–04	Premier League	29	4	5	2	1	0	5[e]	0	0	0	40	6
// 2004–05	Premier League	33	5	7	4	2	0	8[e]	0	0	0	50	9
// 2005–06	Premier League	33	9	2	0	4	2	8[e]	1	—	47	12
// 2006–07	Premier League	34	17	7	3	1	0	11[e]	3	—	53	23
// 2007–08	Premier League	34	31	3	3	0	0	11[e]	8	1[f]	0	49	42
// 2008–09	Premier League	33	18	2	1	4	2	12[e]	4	2[g]	1	53	26
// Total	196	84	26	13	12	4	55	16	3	1	292	118
// Real Madrid	2009–10	La Liga	29	26	0	0	—	6[e]	7	—	35	33
// 2010–11	La Liga	34	40[h]	8	7	—	12[e]	6	—	54	53
// 2011–12	La Liga	38	46	5	3	—	10[e]	10	2[i]	1	55	60
// 2012–13	La Liga	34	34	7	7	—	12[e]	12	2[i]	2	55	55
// 2013–14	La Liga	30	31	6	3	—	11[e]	17	—	47	51
// 2014–15	La Liga	35	48	2	1	—	12[e]	10	5[j]	2	54	61
// 2015–16	La Liga	36	35	0	0	—	12[e]	16	—	48	51
// 2016–17	La Liga	29	25	2	1	—	13[e]	12	2[g]	4	46	42
// 2017–18	La Liga	27	26	0	0	—	13[e]	15	4[k]	3	44	44
// Total	292	311	30	22	0	0	101	105	15	12	438	450
// Juventus	2018–19	Serie A	31	21	2	0	—	9[e]	6	1[l]	1	43	28
// 2019–20	Serie A	33	31	4	2	—	8[e]	4	1[l]	0	46	37
// 2020–21	Serie A	33	29	4	2	—	6[e]	4	1[l]	1	44	36
// 2021–22	Serie A	1	0	—	—	—	—	1	0
// Total	98	81	10	4	0	0	23	14	3	2	134	101
// Manchester United	2021–22	Premier League	30	18	1	0	0	0	7[e]	6	—	38	24
// 2022–23	Premier League	10	1	—	0	0	6[m]	2	—	16	3
// Total	40	19	1	0	0	0	13	8	0	0	54	27
// Al-Nassr	2022–23	Saudi Pro League	16	14	2	0	—	—	1[n]	0	19	14
// 2023–24	Saudi Pro League	31	35	4	3	—	9[o]	6	7[p]	6	51	50
// 2024–25	Saudi Pro League	30	25	1	0	—	8[q]	8	2[n]	2	41	35
// 2025–26	Saudi Pro League	30	28	1	0	—	4[r]	1	2[n]	1	37	30
// Total	107	102	8	3	0	0	21	15	12	9	148	129
// Career total	760	600	78	44	12	4	216	158	33	24	1,099	830
//  European Portuguese pronunciation: [kɾiʃˈtjɐnu ʁuˈnaldu duʃ ˈsɐ̃tuz‿aˈvɐjɾu, kɾɨʃˈ-].
//  Includes Taça de Portugal, FA Cup, Copa del Rey, Coppa Italia, King's Cup
//  Includes Football League Cup
//  One appearance in UEFA Champions League, two appearances in UEFA Cup
//  Appearances in UEFA Champions League
//  Appearance in FA Community Shield
//  Appearances in FIFA Club World Cup
//  Does not include one goal scored on 18 September 2010 against Real Sociedad. Marca, which awards the Pichichi Trophy, attribute it to Ronaldo, while La Liga and UEFA attribute it to Pepe.[468]
//  Appearances in Supercopa de España
//  One appearance and two goals in UEFA Super Cup, two appearances in Supercopa de España, two appearances in FIFA Club World Cup
//  One appearance in UEFA Super Cup, one appearance and one goal in Supercopa de España, two appearances and two goals in FIFA Club World Cup
//  Appearance in Supercoppa Italiana
//  Appearances in UEFA Europa League
//  Appearance(s) in Saudi Super Cup
//  Appearances in AFC Champions League
//  Six appearances and six goals in Arab Club Champions Cup, one appearance in Saudi Super Cup
//  Appearances in AFC Champions League Elite
//  Appearances in AFC Champions League Two
// International
// For a comprehensive listing of international goals scored by Cristiano Ronaldo, see List of international goals scored by Cristiano Ronaldo.
// As of match played 6 July 2026[5][469]
// Appearances and goals by national team, year and competition
// Team	Year	Competitive	Friendly	Total
// Apps	Goals	Apps	Goals	Apps	Goals
// Portugal U15	2001	2[a]	1	7	6	9	7
// Portugal U17	2001	—	3	2	3	2
// 2002	4[b]	3	—	4	3
// Total	4	3	3	2	7	5
// Portugal U20	2003	—	5[c]	1	5	1
// Portugal U21	2002	0	0	1	1	1	1
// 2003	7[d]	2	2	0	9	2
// Total	7	2	3	1	10	3
// Portugal U23	2004	2[e]	1	1	1	3	2
// Portugal	2003	—	2	0	2	0
// 2004	11[f]	7	5	0	16	7
// 2005	7[g]	2	4	0	11	2
// 2006	10[h]	4	4	2	14	6
// 2007	9[i]	5	1	0	10	5
// 2008	5[j]	1	3	0	8	1
// 2009	5[k]	0	2	1	7	1
// 2010	6[l]	3	5	0	11	3
// 2011	6[m]	5	2	2	8	7
// 2012	9[n]	4	4	1	13	5
// 2013	6[o]	7	3	3	9	10
// 2014	5[p]	3	4	2	9	5
// 2015	4[q]	3	1	0	5	3
// 2016	10[r]	10	3	3	13	13
// 2017	10[s]	10	1	1	11	11
// 2018	4[t]	4	3	2	7	6
// 2019	10[u]	14	—	10	14
// 2020	4[v]	2	2	1	6	3
// 2021	11[w]	11	3	2	14	13
// 2022	12[x]	3	—	12	3
// 2023	9[y]	10	—	9	10
// 2024	10[z]	5	2	2	12	7
// 2025	9[aa]	8	0	0	9	8
// 2026	5[ab]	3	2	0	7	3
// Total	177	124	56	22	233	146
// Career total	192	131	75	33	267	164
// Notes

//  Appearances in the 2001 European Youth Summer Olympic Festival.
//  Two appearances and three goals in the 2002 UEFA European Under-17 Championship qualification, two appearances in the 2002 UEFA European Under-17 Championship.
//  Appearances in the 2003 Toulon Tournament.
//  Appearances in the 2004 UEFA European Under-21 Championship qualification.
//  Appearances in the 2004 Summer Olympics.
//  Six appearances and two goals in UEFA Euro 2004, five appearances and five goals in the 2006 FIFA World Cup qualification.
//  Appearances in the 2006 FIFA World Cup qualification.
//  Six appearances and one goal in the 2006 FIFA World Cup, four appearances and three goals in the UEFA Euro 2008 qualifying.
//  Appearances in the UEFA Euro 2008 qualifying.
//  Three appearances and one goal in UEFA Euro 2008, two appearances in the 2010 FIFA World Cup qualification.
//  Appearances in the 2010 FIFA World Cup qualification.
//  Four appearances and one goal in the 2010 FIFA World Cup, two appearances and two goals in the UEFA Euro 2012 qualifying.
//  Appearances in the UEFA Euro 2012 qualifying.
//  Five appearances and three goals in UEFA Euro 2012, four appearances and one goal in the 2014 FIFA World Cup qualification.
//  Appearances in the 2014 FIFA World Cup qualification.
//  Three appearances and one goal in the 2014 FIFA World Cup, two appearances and two goals in the UEFA Euro 2016 qualifying.
//  Appearances in the UEFA Euro 2016 qualifying.
//  Seven appearances and three goals in UEFA Euro 2016, three appearances and seven goals in the 2018 FIFA World Cup qualification.
//  Six appearances and eight goals in the 2018 FIFA World Cup qualification, four appearances and two goals in the 2017 FIFA Confederations Cup.
//  Appearances in the 2018 FIFA World Cup.
//  Eight appearances and eleven goals in the UEFA Euro 2020 qualifying, two appearances and three goals in the 2019 UEFA Nations League Finals.
//  Appearances in the 2020–21 UEFA Nations League.
//  Seven appearances and six goals in the 2022 FIFA World Cup qualification, four appearances and five goals in UEFA Euro 2020.
//  Two appearances in the 2022 FIFA World Cup qualification, five appearances and two goals in the 2022–23 UEFA Nations League, five appearances and one goal in the 2022 FIFA World Cup.
//  Appearances in the UEFA Euro 2024 qualifying.
//  Five appearances in the UEFA Euro 2024, five appearances and five goals in the 2024–25 UEFA Nations League.
//  Four appearances and three goals in the 2024–25 UEFA Nations League, five appearances and five goals in the 2026 FIFA World Cup qualification.
//  Appearances in the 2026 FIFA World Cup.
// Honours
// For a comprehensive listing of Ronaldo's achievements, see List of career achievements by Cristiano Ronaldo.

// Ronaldo, with his third Ballon d'Or, at the Santiago Bernabéu in January 2015
// Sporting CP[470]

// Supertaça Cândido de Oliveira: 2002
// Manchester United[471][472]

// Premier League: 2006–07, 2007–08, 2008–09
// FA Cup: 2003–04
// Football League Cup: 2005–06, 2008–09
// FA Community Shield: 2007
// UEFA Champions League: 2007–08
// FIFA Club World Cup: 2008
// Real Madrid[472]

// La Liga: 2011–12, 2016–17
// Copa del Rey: 2010–11, 2013–14
// Supercopa de España: 2012, 2017
// UEFA Champions League: 2013–14, 2015–16, 2016–17, 2017–18
// UEFA Super Cup: 2014, 2017
// FIFA Club World Cup: 2014, 2016, 2017
// Juventus[216]

// Serie A: 2018–19, 2019–20
// Coppa Italia: 2020–21
// Supercoppa Italiana: 2018, 2020
// Al-Nassr

// Saudi Pro League: 2025–26[473]
// Arab Club Champions Cup: 2023[197]
// Portugal

// UEFA European Championship: 2016[474]
// UEFA Nations League: 2018–19,[239] 2024–25[475]
// Individual

// Ballon d'Or/FIFA Ballon d'Or: 2008, 2013, 2014, 2016, 2017[476][472]
// FIFA World Player of the Year: 2008[476]
// The Best FIFA Men's Player: 2016, 2017[476]
// The Best FIFA Special Award for Outstanding Career Achievement: 2021[477]
// UEFA Club Footballer of the Year: 2007–08
// UEFA Men's Player of the Year Award: 2013–14, 2015–16, 2016–17
// The Best Special Award of UEFA Champions League All-Time Top Scorer: 2024[478]
// FIFA Puskás Award: 2009[479]
// FIFA Club World Cup Golden Ball: 2016
// UEFA Champions League top scorer: 2007–08, 2012–13, 2013–14, 2014–15, 2015–16, 2016–17, 2017–18[480]
// European Golden Shoe: 2007–08, 2010–11, 2013–14, 2014–15[476][472]
// UEFA European Championship All-Time XI: 2016[481]
// UEFA European Championship Golden Boot: 2020
// UEFA Nations League Finals top scorer: 2019, 2025 (shared)
// Premier League Player of the Season: 2006–07, 2007–08[471]
// La Liga Best Player: 2013–14[116]
// Serie A Footballer of the Year: 2019,[482] 2020[483]
// Premier League Golden Boot: 2007–08[471]
// Pichichi Trophy: 2010–11, 2013–14, 2014–15
// Capocannoniere: 2020–21[484]
// Saudi Pro League Golden Boot: 2023–24, 2024–25
// Golden Foot: 2020[485]
// 21st Century Awards, by Globe Soccer Awards: 2020[486]
// Primeira Liga Best Player of All Time Award: 2025[487]
// Ballon d'Or Dream Team: 2020[488]
// FIFA FIFPRO World 11: 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021[489]
// Portuguese Sportsman of the Year: 2011, 2012, 2014, 2015, 2016, 2017, 2018, 2019[490]
// FPF Portuguese Player of the Year: 2015, 2016,[491] 2017, 2018, 2019[492]
// Orders

//  Medal of Merit, Order of the Immaculate Conception of Vila Viçosa (Portuguese Royal Family)[493]
//  Grand officer of the Order of Prince Henry[476]
//  Commander of the Order of Merit[494]
//  Cordão da Insígnia autonómica de distinção (Collar of the Autonomic Insignia of Distinction, Autonomous Region of Madeira)[495]
// `;
