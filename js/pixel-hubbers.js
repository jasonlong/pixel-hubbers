var camera, scene, renderer, light;
var cubes = [];

var pixels = [
  {"x": 3,  "y": 0, "type": "body"},
  {"x": 12, "y": 0, "type": "body"},
  {"x": 3,  "y": 1, "type": "body"},
  {"x": 4,  "y": 1, "type": "body"},
  {"x": 11, "y": 1, "type": "body"},
  {"x": 12, "y": 1, "type": "body"},
  {"x": 3,  "y": 2, "type": "body"},
  {"x": 4,  "y": 2, "type": "body"},
  {"x": 5,  "y": 2, "type": "body"},
  {"x": 6,  "y": 2, "type": "body"},
  {"x": 7,  "y": 2, "type": "body"},
  {"x": 8,  "y": 2, "type": "body"},
  {"x": 9,  "y": 2, "type": "body"},
  {"x": 10, "y": 2, "type": "body"},
  {"x": 11, "y": 2, "type": "body"},
  {"x": 12, "y": 2, "type": "body"},
  {"x": 2,  "y": 3, "type": "body"},
  {"x": 3,  "y": 3, "type": "body"},
  {"x": 4,  "y": 3, "type": "body"},
  {"x": 5,  "y": 3, "type": "body"},
  {"x": 6,  "y": 3, "type": "body"},
  {"x": 7,  "y": 3, "type": "body"},
  {"x": 8,  "y": 3, "type": "body"},
  {"x": 9,  "y": 3, "type": "body"},
  {"x": 10, "y": 3, "type": "body"},
  {"x": 11, "y": 3, "type": "body"},
  {"x": 12, "y": 3, "type": "body"},
  {"x": 13, "y": 3, "type": "body"},
  {"x": 2,  "y": 4, "type": "body"},
  {"x": 3,  "y": 4, "type": "body"},
  {"x": 4,  "y": 4, "type": "body"},
  {"x": 5,  "y": 4, "type": "body"},
  {"x": 6,  "y": 4, "type": "body"},
  {"x": 7,  "y": 4, "type": "body"},
  {"x": 8,  "y": 4, "type": "body"},
  {"x": 9,  "y": 4, "type": "body"},
  {"x": 10, "y": 4, "type": "body"},
  {"x": 11, "y": 4, "type": "body"},
  {"x": 12, "y": 4, "type": "body"},
  {"x": 13, "y": 4, "type": "body"},
  {"x": 2,  "y": 5, "type": "body"},
  {"x": 3,  "y": 5, "type": "body"},
  {"x": 4,  "y": 5, "type": "body"},
  {"x": 5,  "y": 5, "type": "face"},
  {"x": 6,  "y": 5, "type": "face"},
  {"x": 7,  "y": 5, "type": "face"},
  {"x": 8,  "y": 5, "type": "face"},
  {"x": 9,  "y": 5, "type": "face"},
  {"x": 10, "y": 5, "type": "face"},
  {"x": 11, "y": 5, "type": "body"},
  {"x": 12, "y": 5, "type": "body"},
  {"x": 13, "y": 5, "type": "body"},
  {"x": 2,  "y": 6, "type": "body"},
  {"x": 3,  "y": 6, "type": "body"},
  {"x": 4,  "y": 6, "type": "face"},
  {"x": 5,  "y": 6, "type": "feature"},
  {"x": 6,  "y": 6, "type": "face"},
  {"x": 7,  "y": 6, "type": "face"},
  {"x": 8,  "y": 6, "type": "face"},
  {"x": 9,  "y": 6, "type": "face"},
  {"x": 10, "y": 6, "type": "feature"},
  {"x": 11, "y": 6, "type": "face"},
  {"x": 12, "y": 6, "type": "body"},
  {"x": 13, "y": 6, "type": "body"},
  {"x": 2,  "y": 7, "type": "body"},
  {"x": 3,  "y": 7, "type": "body"},
  {"x": 4,  "y": 7, "type": "face"},
  {"x": 5,  "y": 7, "type": "feature"},
  {"x": 6,  "y": 7, "type": "face"},
  {"x": 7,  "y": 7, "type": "face"},
  {"x": 8,  "y": 7, "type": "face"},
  {"x": 9,  "y": 7, "type": "face"},
  {"x": 10, "y": 7, "type": "feature"},
  {"x": 11, "y": 7, "type": "face"},
  {"x": 12, "y": 7, "type": "body"},
  {"x": 13, "y": 7, "type": "body"},
  {"x": 3,  "y": 8, "type": "body"},
  {"x": 4,  "y": 8, "type": "body"},
  {"x": 5,  "y": 8, "type": "face"},
  {"x": 6,  "y": 8, "type": "face"},
  {"x": 7,  "y": 8, "type": "feature"},
  {"x": 8,  "y": 8, "type": "feature"},
  {"x": 9,  "y": 8, "type": "face"},
  {"x": 10, "y": 8, "type": "face"},
  {"x": 11, "y": 8, "type": "body"},
  {"x": 12, "y": 8, "type": "body"},
  {"x": 4,  "y": 9, "type": "body"},
  {"x": 5,  "y": 9, "type": "body"},
  {"x": 6,  "y": 9, "type": "body"},
  {"x": 7,  "y": 9, "type": "body"},
  {"x": 8,  "y": 9, "type": "body"},
  {"x": 9,  "y": 9, "type": "body"},
  {"x": 10, "y": 9, "type": "body"},
  {"x": 11, "y": 9, "type": "body"},
  {"x": 0, "y": 10, "type": "body"},
  {"x": 1, "y": 10, "type": "body"},
  {"x": 6, "y": 10, "type": "body"},
  {"x": 7, "y": 10, "type": "body"},
  {"x": 8, "y": 10, "type": "body"},
  {"x": 9, "y": 10, "type": "body"},
  {"x": 0, "y": 11, "type": "water"},
  {"x": 2, "y": 11, "type": "body"},
  {"x": 3, "y": 11, "type": "body"},
  {"x": 5, "y": 11, "type": "body"},
  {"x": 6, "y": 11, "type": "body"},
  {"x": 7, "y": 11, "type": "body"},
  {"x": 8, "y": 11, "type": "body"},
  {"x": 9, "y": 11, "type": "body"},
  {"x": 10, "y": 11, "type": "body"},
  {"x": 3, "y": 12, "type": "body"},
  {"x": 4, "y": 12, "type": "body"},
  {"x": 5, "y": 12, "type": "body"},
  {"x": 6, "y": 12, "type": "body"},
  {"x": 7, "y": 12, "type": "body"},
  {"x": 8, "y": 12, "type": "body"},
  {"x": 9, "y": 12, "type": "body"},
  {"x": 10, "y": 12, "type": "body"},
  {"x": 5, "y": 13, "type": "body"},
  {"x": 6, "y": 13, "type": "body"},
  {"x": 7, "y": 13, "type": "body"},
  {"x": 8, "y": 13, "type": "body"},
  {"x": 9, "y": 13, "type": "body"},
  {"x": 10, "y": 13, "type": "body"},
  {"x": 5, "y": 14, "type": "body"},
  {"x": 7, "y": 14, "type": "body"},
  {"x": 8, "y": 14, "type": "body"},
  {"x": 10, "y": 14, "type": "body"},
  {"x": 4, "y": 15, "type": "water"},
  {"x": 5, "y": 15, "type": "body"},
  {"x": 6, "y": 15, "type": "water"},
  {"x": 7, "y": 15, "type": "body"},
  {"x": 8, "y": 15, "type": "body"},
  {"x": 9, "y": 15, "type": "water"},
  {"x": 10, "y": 15, "type": "body"},
  {"x": 11, "y": 15, "type": "water"},
  {"x": 3, "y": 16, "type": "water"},
  {"x": 4, "y": 16, "type": "body"},
  {"x": 5, "y": 16, "type": "water"},
  {"x": 6, "y": 16, "type": "body"},
  {"x": 7, "y": 16, "type": "water"},
  {"x": 8, "y": 16, "type": "water"},
  {"x": 9, "y": 16, "type": "body"},
  {"x": 10, "y": 16, "type": "water"},
  {"x": 11, "y": 16, "type": "body"},
  {"x": 12, "y": 16, "type": "water"},
  {"x": 3, "y": 17, "type": "water"},
  {"x": 4, "y": 17, "type": "reflection"},
  {"x": 5, "y": 17, "type": "water"},
  {"x": 6, "y": 17, "type": "reflection"},
  {"x": 7, "y": 17, "type": "water"},
  {"x": 8, "y": 17, "type": "water"},
  {"x": 9, "y": 17, "type": "reflection"},
  {"x": 10, "y": 17, "type": "water"},
  {"x": 11, "y": 17, "type": "reflection"},
  {"x": 12, "y": 17, "type": "water"},
  {"x": 4, "y": 18, "type": "water"},
  {"x": 5, "y": 18, "type": "reflection"},
  {"x": 6, "y": 18, "type": "water"},
  {"x": 7, "y": 18, "type": "reflection"},
  {"x": 8, "y": 18, "type": "reflection"},
  {"x": 9, "y": 18, "type": "water"},
  {"x": 10, "y": 18, "type": "reflection"},
  {"x": 11, "y": 18, "type": "water"}
];

var gravatars = [
  "25c7c18223fb42a4c6ae1c8db6f50f9b",
  "b8dbb1987e8e5318584865f880036796",
  "947c333c75de1dc54a711a400d575c8c",
  "9375a9529679f1b42b567a640d775e7d",
  "472814aac7576b67da59ea79fcbf7d66",
  "17fc534665d54bcd8b4d2676d709aa99",
  "5f2da528927a2ec9ba4fec2069cbc958",
  "abfc88b96ae18c85ba7aac3bded2ec5e",
  "6f63cde8b16b035280ca615f621a6c8c",
  "821395fe70906c8290df7f18ac4ac6cf",
  "a86224d72ce21cd9f5bee6784d4b06c7",
  "920e60e81da4fb61eaeb95fa9d7c3b70",
  "c9f60c0cb1d941fa8e93bbfcb907c27e",
  "88124ba9e758ec0cbd4f902f30e96fae",
  "7f67284c12b6d38fa1c8590911fd58a0",
  "63027897db609fdbe6ac820fa12736b9",
  "a79ff2bb7da84e275361857d2feb2b1b",
  "ac65e62b7ad42e9bc5fdf391d0e250a7",
  "2f4861b27dc35663ed271d39f5358261",
  "8cf17bf55c4d16cf52480619bb0b6c92",
  "d47656e20ff5e42f125fc5ea0fd636c6",
  "62e8c8bfaa8d755cab82accb48d335c8",
  "4f237ee952d1af0c47028bfda53664a8",
  "4e3f068bcac207404306e790c0d662ed",
  "881bd08b6b94e600475ce431e8e6ea35",
  "2bb2258c02ee8f25f1a41a6223f9ac1f",
  "bbe5dc8dcf248706525ab76f46185520",
  "aeb22e809b34e9c8a5623ba6c4738a63",
  "e650a773fc40f042e46d1e36b326e4e1",
  "4d1c9dad17af98e55cb65b4efce27c42",
  "eb6845de9b94082d7d90a0603d91ff42",
  "060dc0e5e351d467dec8bb4936bde683",
  "b6861bc75bff3c594212338a914a39ad",
  "e32fc8d646083d242229ef8fc9168c27",
  "cba1c933e48e5ec70c68f640a530b969",
  "9112400090829f79d97ed9b12056fa4f",
  "94824342b63483d17d34a489b5a0024a",
  "f317439da90c3176adc8938bcf5181ff",
  "97c3a8eea9b7eaa9e1e93ea3cd47399f",
  "70016e777889adad7e6ec51a520ac686",
  "8058c2c00149cbe4104ddc9fa814443f",
  "1c6aa6a048aab91f4e55962881fa779a",
  "1aa8160db37ef2d2343364b2c4eaa1cf",
  "ae14cc4491ac334f9cd23f9f93b4305e",
  "3783e88128f2773aa70a8f925d5f795d",
  "0a5a5f09f2c85cc425f7b8db4c5e61c1",
  "20bfe76b3d6105641f879fe45cfc9272",
  "80d567036e02b0b07797253f85e0fcc2",
  "4a182249dc31bc436c7f6fe599402ca5",
  "cdf546b601bf29a7eb4ca777544d11cd",
  "bd964c4c26b160867008b423ae92b3e7",
  "1cae9d75fdc2f167e04ad306514c0934",
  "c2e40adce99a3780789b370a2bfa02f6",
  "66e82696b38beea60f0e0afe40b0c870",
  "64b4ab1f5516ae404994313bab64ab87",
  "f5a0f0acef57d61304ed7c5da7cd5007",
  "d0bd5ccf2859245b4daf49739a2ceab3",
  "7f6e060e50812eb45e8916072f3f0872",
  "0e09704055a8efab46601502eebe0d37",
  "8209444173472be8823f570f77ed8b8b",
  "05281371ba613c3963420a2294131bcb",
  "33682dbe3b7d8d63a4d7c65af2bc9a94",
  "6753ce3284e5153f7e24e2d781354e5e",
  "fb127cf31f47e895f6fc0c8e84e5821b",
  "6af460b183446976ae7d1d06022f10ad",
  "7f81fd5c7792dabca22c433abbfbf0cb",
  "d6459b62e0342d9052fff78ce32fceea",
  "df5e7adb20adae6c120b04e7cafb15a0",
  "0c39b828636367fc6e22b7be8c803c74",
  "0d410939c9e80980cf0430772567dfb4",
  "da871a1ac933724a6678bd89949b19c7",
  "4d5b5dd4e263d780a5dfe7ac8b8ac98c",
  "6ac41c39b6087f6e059f31903ffc003e",
  "3be29bee1806b097fc68621eb45f2e37",
  "cbc666087db2f339192b13a0e14327d3",
  "7e19cd5486b5d6dc1ef90e671ba52ae0",
  "82787f3fcc9e392fa214f5ac4ea4a3d8",
  "993c45489aac7a71f27112ba2ab4f74c",
  "9eabab0dc683ac153d5b5a44df59424d",
  "87ec3fc103b3c58a25de92fd65519387",
  "ee5bae7fa46b3195869c285ecbb4619e",
  "7ce90d712fab09421b7f2cf955b9a4c8",
  "8057ea424bd9adc90a3a14c3b8a49e7c",
  "4698d387cdde58a95c8dc7f8d198cb48",
  "4acc63ae1aa498456019c1887c018adb",
  "a31ea6a86d8ac934807ac59b6d47f631",
  "a0fde053889106001f4d0a0886b68a3a",
  "f5f02434742f6ed71e70f5d663164d68",
  "803993dc11765d89aee137f29aa05d3a",
  "1a25cc6d27889cbacea4304090c0393e",
  "a44d5abad6e86cff4e34d9f0839535c9",
  "b1b1d33e0655e841d4fd8467359c58d0",
  "142b65f8017f52852471e8828fe245d4",
  "3d15ecbcdfdee239682d03745ba774c5",
  "b8845ca2bbcec95c5b75b6fc6fae888b",
  "088f6feed2e81974292d52d9e8a78bda",
  "6acbc27c14ce19bf80cdee68f690ebed",
  "1f1a3879e40c9418252a5aec3aed31b2",
  "cac992bb300ed4f3ed5c2a6049e552f9",
  "2eed5e5190a11b8d09ba8d8e5d8d85d4",
  "acd4b5803e806bf0ed70299f15cd6d18",
  "e90b9d197aba32907c5fffcbff76c511",
  "c831c273b825c5a8d819da38e1bcb047",
  "ddf2d42eac63eb87e1542fc218dbfc86",
  "41e3a9fab9e827d582caf8b2464140d5",
  "75ce4d061e0ce19b8822ba0989c05153",
  "efc09baeb94ed440b185710062c8956d",
  "269f43c0d8844d51ec4d30eb44c8f1f6",
  "c1a119fe2178489fc477c22341f82ea0",
  "a2c5ba13b63528adb1c33da777b94059",
  "fcb052cb03de0357fc30978d9434bcb4",
  "d0ca2bf32bda9e9ea8c4473ffc3aaa0d",
  "ef61ab3fe775e6680aac9aed797109d0",
  "3c57b3ae4d8aae5b0b91a8cdad57d7cd",
  "408ba7659b4dd2a06b84395bb131514f",
  "e7c5b25cc6a66344d4bdae461a9129ec",
  "c15e7a20088305ac8506450c7bfe1a68",
  "0bf208eebdab7c5d16152f70a1ee837f",
  "2943f34247ca25eccc991601db613c49",
  "4c36f7481ec8ed0dc5f286c10eb71a9e",
  "d4be9b0fd15ec79f4448ae4efe024086",
  "41584ebec5f7cce92b9d3c457c1d597e",
  "220ff3473d2618ba6e1e44231b0cb23d",
  "9c6983ca04de773395d9ba10fc8764c6",
  "4897e757fa3fb2ac92f5526f84b4da1e",
  "bc4ab438f7a4ce1c406aadc688427f2c",
  "574c4f5686429ae6f4d99bf5780a2f9b",
  "b8dfc1ccaac89ecc4cff77f83998789c",
  "2fd431f6446b992e9e16d01a876feb14",
  "c6858f4b8ec263c8c3c58759494e926a",
  "8caa0afdae1a934c30a1998472c63134",
  "8069ee33e582a295a2910f14afcb0360",
  "ed461b57d889532a73520fef5c53651f",
  "43d562dc983b5383de922d6078477e78",
  "04281fcaba85633878f9a451a2e7c4f7",
  "ce3033c7dc1f173892cf2eec0d8e0795",
  "6af915d3c6aa4ad30bbad43d8035fe10",
  "8fda72730ed1dc7b35d166c41514e806",
  "2c80e1b0837eec76d38d4f7fa1c15e87",
  "6bfdb8a95751d6380ee01472d680f036",
  "da6055905b93eb438e6c4827e9dd5279",
  "befd819b3fced8c6bd3dba7e633dd068",
  "76f4202a12832ed4c47be7d7ca984e01"
]

var COLORS = {
  "body":       0x000000,
  "face":       0xffc09f,
  "feature":    0xae433b,
  "water":      0x62e3ff,
  "reflection": 0x45b0ff
};

function Cube(pixel, gravatarID) {
  this.mesh = null;
  this.pixelcatX = pixel.x;
  this.pixelcatY = pixel.y;
  this.type = pixel.type;
  this.gravatarID = gravatarID;
}

Cube.prototype = {

  createMesh : function() {
    var geometry = new THREE.CubeGeometry(100, 100, 100);
    var material  = new THREE.MeshPhongMaterial({
          ambient   : 0x444444,
          color     : COLORS[this.type],
          shininess : 100,
          specular  : 0xaaaaaa,
          shading   : THREE.SmoothShading,
        });
    var avatar = this.gravatarID ?
      new THREE.MeshLambertMaterial(
            {map: THREE.ImageUtils.loadTexture('https://secure.gravatar.com/avatar/'+this.gravatarID + '?s=200')}) :
      new THREE.MeshLambertMaterial({color: 0x000000});
    geometry.materials = [avatar, material];
    geometry.faces[0].materialIndex = 1;
    geometry.faces[1].materialIndex = 1;
    geometry.faces[2].materialIndex = 1;
    geometry.faces[3].materialIndex = 1;
    geometry.faces[4].materialIndex = 0;
    geometry.faces[5].materialIndex = 1;

    this.mesh = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial());
    this.mesh.position.x =  this.pixelcatX * 100;
    this.mesh.position.y = -this.pixelcatY * 100;
    this.mesh.position.z = 2000;

    scene.add(this.mesh);
  },

  flyIn : function() {
    var tween = new TWEEN.Tween(this.mesh.position);
    tween.to({z : 0}, 2000);
    tween.easing(TWEEN.Easing.Sinusoidal.Out);
    tween.delay(_.random(0, 4000));
    // tween.onUpdate(function() {
    //   camera.position.z += 0.09;
    // });
    tween.start();
  },

  pushOut : function() {
    if ((this.pixelcatX % 2 === 0 && this.pixelcatY % 2 === 0) ||
      (this.pixelcatX % 2 !== 0 && this.pixelcatY % 2 !== 0)) {
      var tween = new TWEEN.Tween(this.mesh.position);
      tween.to({z : 200}, 100);
      tween.start();
    }
  },

  flip : function() {
    var tween = new TWEEN.Tween(this.mesh.rotation);
    if ((this.pixelcatX % 2 === 0 && this.pixelcatY % 2 === 0) ||
      (this.pixelcatX % 2 !== 0 && this.pixelcatY % 2 !== 0)) {
      tween.to({y : 180 * Math.PI / 180}, 300);
    }
    else {
      tween.to({y : -180 * Math.PI / 180}, 300);
    }
    tween.start();
  },

  pushIn : function() {
    var tween = new TWEEN.Tween(this.mesh.position);
    tween.to({z : 0}, 100);
    tween.start();
  }
}

init();
animate();

function init() {
  scene = new THREE.Scene();
  initLights();

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.x = 770;
  camera.position.y = -900;
  camera.position.z = 1500;
  // camera.position.z = 200;

  createGroundPlane();
  createCubes();
  animateCubes();

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMapEnabled = true;
  renderer.shadowMapSoft = true;

  document.body.appendChild(renderer.domElement);
  window.addEventListener( 'resize', onWindowResize, false );
}

function initLights() {
  var light = new THREE.DirectionalLight(0xd1e6f5, 0.5);
  light.position.set(300, -500, 2000);
  scene.add( light );

  var light = new THREE.SpotLight(0xd1e6f5, 0.6);
  light.position.set(500, 100, 1000);
  light.target.position.set(300, -200, 100 );
  light.shadowCameraNear    = 0.01;
  light.castShadow    = true;
  light.shadowDarkness    = 0.5;
  // light.shadowCameraVisible = true;
  scene.add(light);

  var light = new THREE.SpotLight(0xd1e6f5, 1);
  light.position.set(1300, -2000, 1000);
  light.target.position.set(600, -600, 100 );
  light.shadowCameraNear    = 0.01;
  light.castShadow    = true;
  light.shadowDarkness    = 0.5;
  // light.shadowCameraVisible = true;
  scene.add(light);
}

function createGroundPlane() {
  // ground
  var geometry = new THREE.CubeGeometry(40000, 1, 4000);
  var material  = new THREE.MeshPhongMaterial({
        ambient   : 0x444444,
        color   : 0x286693,
        shininess : 100,
        specular  : 0x00000,
        shading   : THREE.SmoothShading,
      });
  var mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = 0;
  mesh.position.y = -2000;
  // scene.add(mesh);

  // back wall
  var geometry = new THREE.CubeGeometry(40000, 40000, 1);
  var material  = new THREE.MeshPhongMaterial({
        ambient   : 0x444444,
        color   : 0x3b96d9,
        shininess : 100,
        specular  : 0x00000,
        shading   : THREE.SmoothShading,
      });
  var mesh = new THREE.Mesh(geometry, material);
  mesh.position.z = -500;
  scene.add(mesh);
}

function createCubes() {
  gravatars = _.shuffle(gravatars);
  _.each(pixels, function(pixel, index) {
    var cube = new Cube(pixel, gravatars[index]);
    cube.createMesh();
    cubes.push(cube);
  });
}

function animateCubes() {
  _.each(cubes, function(cube, index) {
    _.bindAll(cube, 'flyIn', 'pushOut', 'flip', 'pushIn');
    _.delay(cube.flyIn, 1000);
    _.delay(cube.pushOut, 8000);
    _.delay(cube.flip, 8500);
    _.delay(cube.pushIn, 9000);
  });
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);

  TWEEN.update();
}