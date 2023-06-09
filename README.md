Ova aplikacija služi za slanje i primanje poruka u stvarnom vremenu.
Aplikacija je pisana u React-u i služi se klasnim komponentama. Na početku sveke komponente uvoze se potrebni moduli React i {Component} iz React biblioteke.

App.js komonenta predstavlja glavnu komonentu u kojoj je smještena logika cijele aplikacije. Kako bi se to postiglo u komponentu su uvezene App.css, Input.js i Messages.js komponente. 
App.js komponenta sadrži funkcije randomName i randomColor. Funkcija randomName generira slučajno ime pošiljatelja poruke kombinirajuću slučajnim odabirm imena i prezimena iz definiranih lista. Funkcija randomColor generira slučajnu boju avatara pošiljatelja poruke.
Zatim se definira klasa App. U konstruktoru klase App se postavlja početno stanje komponente messages i member, a pri čemu messages ima početno stanje prazan string dok member poprima početno stanje kao objekt sa korisničkim inemenom i bojom genriranih funkcijama randomName i RandomColor.
U metodi ComponentDidMount se stvara nova istanca Scaledron objekta kojemu se predaje atrbut data koji sadrži informacije o članu odnosno njegovo korisničko ime i boju. Nakon što se uspješno otvori nova Saledron veza, tada se ažurira novo stanje objekta s nazivom member, a što se postiže dodavanjem identifikatora clientId. Kako bi primao poruke, pretplaćuje se na sobu observable-room.
Metoda sendMessage koristi dron objekt kako bi se poslala poruka koja se objavljuje u sobi observable-room. 
U metodi render je definiran prikaz same komponente, a vraća header i u njemu pozicioniran h1 element kao semantički HTML element te komponente Message i Input. Komponenta Message prima propove messages i curentMrmber koji vraćaju tekst poruke i pošiljatelja. Komponenta Input prima prop senMessage za slanje poruke.
Na kraju se koristi export default App; kako bi se omogućio uvoz komponente u druge komponente.

Komponenta Input.js omogućuje slanje poruka u aplikaciji.
Klasa Input predstavlja komponentu za unos poruka. U konstruktoru klase Input postavlja se početno stanje komponente text koje je prazan string.
Komponenta ima dvije metode i to onChange i onState. Metoda onChanege se ažurira stanje komponente tako da se vrijednost text postavi na vrijednost nove unesene poruke tj. teksta. Metoda onSubmit se poziva kada se pritisne gumb za slanje poruke ili pritiskom na tipku Enter. U ovoj metodi najprije se sprečava pretpostavljeno ponašanje obrasca, a zatim provjerava dali je unesen teks, a ko nije unesen teks ili je unesen razmak, vraća upozoravajuću poruku, a ukoliko je unesen teks, poziva se metoda koja šalje unesen tekst kroz props. Nakon samog slanja poruke, stanje komponente se prazni, odnosno resetira na prazano string.
Meroda metodi render je definiran prikaz same komponente. Ovdje se prikazuje obrazaf form s poljem za unos teksta poruke i gumba za slanje poruke.
Na kraju se koristi export default Input; kako bi se omogućio uvoz komponente u druge komponente.

Komponenta Messages.js omogućuje prikaz liste poruka.
U komponenti je definirana metoda randomId koja generira slučajan broj između 1 i 100 000, a koristi se za generiranje jedinstvenog identifikatora za svaku poruku u listi.
Metoda renderMessage definira izgled prikaza svake poruke te poziva metodu rendomId kako bi se generirao jedinstveni identifikator za svaku poruku. Metoda renderMessage prima objekt message koji sadrži podatke o memberu koji je poslao poruku i teks poruke. Svojstva props daje podatke o trenutnom članu te se vrši provjera dali je poruku poslao trenutačni član ili ne. Temeljem određivanja dali je poruku poslao trenutačni član ili ne, dodjeluje se odgovarajuča CSS klasa. Ako se radi o trenutnom čanu dodjeljuje se CSS klasa Mesages-message curentMember, a sko se ne radi o trenutnom članu, dodjeljuje se klasa Messages-mesage a koje su definirane u komponenti App.css. Zatim se poruka prikazuje u obliku liste elemeta pri čemu se unutar li elementa prikazuje avatar membera i sam sadržaj poruke koji se sastoji od teksta i korisničkog imena. 
U render metodi se u svrhu generiranje li elemenata za svaku poruku poziva metoda renderMesage.
Na kraju se koristi export default  Messages; kako bi se omogućio uvoz komponente u druge komponente.


U komponenti App.css smješten je css koji pomoću selektora omogućuje primjenu stilova, boja i rasporeda HTML elemenata. 




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
