function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classStaticPrivateMethodGet(receiver, classConstructor, method) { _classCheckPrivateStaticAccess(receiver, classConstructor); return method; }
function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const {
  THREE
} = window;

// https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
function isMobile() {
  let check = false;

  // eslint-disable-next-line
  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
}
const IS_MOBILE_DEVICE = isMobile();
const FLAGS = Object.freeze({
  ENABLE_SHADOWS: !IS_MOBILE_DEVICE,
  ENABLE_BLOOM: !IS_MOBILE_DEVICE,
  ENABLE_NOISE: !IS_MOBILE_DEVICE
});

// https://coolors.co/palette/f72585-b5179e-7209b7-560bad-480ca8-3a0ca3-3f37c9-4361ee-4895ef-4cc9f0
const COLOR_PALETTE = Object.freeze({
  black: 0x010101,
  white: 0xEEEEEE,
  color1: 0xF72585,
  color2: 0xB5179E,
  color3: 0x7209B7,
  color4: 0x560BAD,
  color5: 0x480CA8,
  color6: 0x3A0CA3,
  color7: 0x3F37C9,
  color8: 0x4361EE,
  color9: 0x4895EF,
  color10: 0x4CC9F0
});
const COLOR_PALETTE_GLSL = Object.freeze({
  black: 'vec4(0.04, 0.04, 0.04, 1.0)',
  white: 'vec4(0.933, 0.933, 0.933, 1.0)',
  color1: 'vec4(0.969, 0.145, 0.522, 1.0)',
  color2: 'vec4(0.71, 0.09, 0.62, 1.0)',
  color3: 'vec4(0.447, 0.035, 0.718, 1.0)',
  color4: 'vec4(0.337, 0.043, 0.678, 1.0)',
  color5: 'vec4(0.282, 0.047, 0.659, 1.0)',
  color6: 'vec4(0.227, 0.047, 0.639, 1.0)',
  color7: 'vec4(0.247, 0.216, 0.788, 1.0)',
  color8: 'vec4(0.263, 0.38, 0.933, 1.0)',
  color9: 'vec4(0.282, 0.584, 0.937, 1.0)',
  color10: 'vec4(0.298, 0.788, 0.941, 1.0)'
});
class DefaultMaterial extends THREE.MeshStandardMaterial {
  constructor() {
    super({
      color: COLOR_PALETTE.white
    });
  }
}
class CarMaterial extends THREE.MeshStandardMaterial {
  constructor() {
    super({
      color: COLOR_PALETTE.black
    });
  }
}
class LightMaterial extends THREE.MeshStandardMaterial {
  constructor() {
    super({
      color: COLOR_PALETTE.color1
    });
  }
}
class WheelMaterial extends THREE.MeshStandardMaterial {
  constructor() {
    super({
      color: COLOR_PALETTE.black
    });
  }
}
class MountainMaterial extends THREE.MeshBasicMaterial {
  constructor() {
    super({
      color: COLOR_PALETTE.black
    });
  }
}
class CustomMaterial extends THREE.MeshStandardMaterial {
  onBeforeCompile(shader) {
    // eslint-disable-next-line no-param-reassign
    shader.uniforms.uTime = {
      value: 0.0
    };

    // eslint-disable-next-line no-param-reassign
    shader.vertexShader = shader.vertexShader.replace('#include <uv_pars_vertex>', `varying vec2 vUv;
            uniform float uTime;`);

    // eslint-disable-next-line no-param-reassign
    shader.vertexShader = shader.vertexShader.replace('#include <uv_vertex>', 'vUv = uv;');

    // eslint-disable-next-line no-param-reassign
    shader.fragmentShader = shader.fragmentShader.replace('varying vec3 vViewPosition;', `varying vec3 vViewPosition;
            varying vec2 vUv;
            uniform float uTime;`);
    this.userData.shader = shader;
  }
}
class CustomTransparentMaterial extends CustomMaterial {
  constructor() {
    super({
      transparent: true
    });
  }
}
class RoadMaterial extends CustomTransparentMaterial {
  onBeforeCompile(shader) {
    super.onBeforeCompile(shader);

    // eslint-disable-next-line no-param-reassign
    shader.fragmentShader = shader.fragmentShader.replace(
    // eslint-disable-next-line sonarjs/no-duplicate-string
    '#include <map_fragment>', `
            diffuseColor = ${COLOR_PALETTE_GLSL.black};

            float width = 0.06;

            bool isInCenter = abs(0.5 - vUv.x) < (0.01 + width / 2.0);
            bool isInRoad = abs(0.5 - vUv.x) < (width / 2.0);

            if (isInCenter) {
                diffuseColor = ${COLOR_PALETTE_GLSL.color9};
            }

            if (isInRoad) {
                diffuseColor = ${COLOR_PALETTE_GLSL.black};

                diffuseColor.a = 0.8;

                bool isInLine = (abs(0.5 - vUv.x + width / 6.0) < 0.0003);
                bool isInDashedLine = (abs(0.5 - vUv.x - width / 6.0) < 0.0003)
                    && (sin(100.0 * vUv.y - 10.0 * uTime) > 0.3);

                if (isInLine || isInDashedLine) {
                    diffuseColor = ${COLOR_PALETTE_GLSL.color10};
                }
            }
            `);
    this.userData.shader = shader;
  }
}
class SunMaterial extends CustomTransparentMaterial {
  onBeforeCompile(shader) {
    super.onBeforeCompile(shader);

    // eslint-disable-next-line no-param-reassign
    shader.fragmentShader = shader.fragmentShader.replace('#include <map_fragment>', `
            diffuseColor = vec4(0.0);

            bool isInSun = distance(vUv.xy, vec2(0.5, 0.5)) < 0.5;

            if (isInSun) {
                diffuseColor = ${COLOR_PALETTE_GLSL.color1};

                float delta = 0.2 * (1.0 - vUv.y);

                diffuseColor += vec4(delta, delta, 0.0, 0.0);

                bool isInLine = sin(100.0 * vUv.y) * vUv.y > 0.3;

                if (isInLine) {
                    diffuseColor = ${COLOR_PALETTE_GLSL.color3};
                }
            }
            `);
    this.userData.shader = shader;
  }
}
class BuildingMaterialA extends CustomMaterial {
  onBeforeCompile(shader) {
    super.onBeforeCompile(shader);

    // eslint-disable-next-line no-param-reassign
    shader.fragmentShader = shader.fragmentShader.replace('#include <map_fragment>', `
            diffuseColor = ${COLOR_PALETTE_GLSL.black};

            bool isInWindow = vUv.y > 0.09
                && (sin(31.415 * (vUv.x - 0.05)) > 0.5)
                && (sin(100.0 * vUv.y) > 0.5);

            if (isInWindow) {
                diffuseColor = ${COLOR_PALETTE_GLSL.color7};

                if (vUv.x > 0.4 && vUv.x < 0.6) {
                    diffuseColor = ${COLOR_PALETTE_GLSL.color10};
                }
            }
            `);
    this.userData.shader = shader;
  }
}
class BuildingMaterialB extends CustomMaterial {
  onBeforeCompile(shader) {
    super.onBeforeCompile(shader);

    // eslint-disable-next-line no-param-reassign
    shader.fragmentShader = shader.fragmentShader.replace('#include <map_fragment>', `
            diffuseColor = ${COLOR_PALETTE_GLSL.black};

            bool isInWindow = vUv.y > 0.1
                && vUv.y < 0.5
                && (sin(50.0 * 3.1415 * (vUv.x - 0.05)) > -0.8)
                && (sin(50.0 * vUv.y) > 0.5);

            if (isInWindow) {
                diffuseColor = ${COLOR_PALETTE_GLSL.color1};

                if (vUv.y < 0.3) {
                    diffuseColor = ${COLOR_PALETTE_GLSL.color4};
                }
            }
            `);
    this.userData.shader = shader;
  }
}
class BuildingMaterialC extends CustomMaterial {
  onBeforeCompile(shader) {
    super.onBeforeCompile(shader);

    // eslint-disable-next-line no-param-reassign
    shader.fragmentShader = shader.fragmentShader.replace('#include <map_fragment>', `
            diffuseColor = ${COLOR_PALETTE_GLSL.black};

            bool isInWindow = vUv.y > 0.5
                && vUv.y < 0.8
                && (sin(5.0 * 3.1415 * (vUv.x - 0.05)) > -0.8)
                && (sin(50.0 * vUv.y) > 0.5);

            if (isInWindow) {
                diffuseColor = ${COLOR_PALETTE_GLSL.color9};
            }
            `);
    this.userData.shader = shader;
  }
}
class BuildingMaterialD extends CustomMaterial {
  onBeforeCompile(shader) {
    super.onBeforeCompile(shader);

    // eslint-disable-next-line no-param-reassign
    shader.fragmentShader = shader.fragmentShader.replace('#include <map_fragment>', `
            diffuseColor = ${COLOR_PALETTE_GLSL.black};

            bool isInWindow = vUv.y > 0.1
                && (sin(50.0 * vUv.y) > -0.8);

            if (isInWindow) {
                diffuseColor = ${COLOR_PALETTE_GLSL.color5};
            }
            `);
    this.userData.shader = shader;
  }
}
class MaterialsLibrary {}
_defineProperty(MaterialsLibrary, "default", new DefaultMaterial());
_defineProperty(MaterialsLibrary, "road", new RoadMaterial());
_defineProperty(MaterialsLibrary, "sun", new SunMaterial());
_defineProperty(MaterialsLibrary, "mountain", new MountainMaterial());
_defineProperty(MaterialsLibrary, "car", new CarMaterial());
_defineProperty(MaterialsLibrary, "wheel", new WheelMaterial());
_defineProperty(MaterialsLibrary, "light", new LightMaterial());
_defineProperty(MaterialsLibrary, "buildingA", new BuildingMaterialA());
_defineProperty(MaterialsLibrary, "buildingB", new BuildingMaterialB());
_defineProperty(MaterialsLibrary, "buildingC", new BuildingMaterialC());
_defineProperty(MaterialsLibrary, "buildingD", new BuildingMaterialD());
class Road extends THREE.Group {
  constructor() {
    super();
    const geometry = new THREE.PlaneGeometry();
    const material = MaterialsLibrary.road;
    const road = new THREE.Mesh(geometry, material);
    road.scale.set(200, 200, 1);
    road.rotation.set(-Math.PI / 2, 0, 0);
    if (FLAGS.ENABLE_SHADOWS) {
      road.receiveShadow = true;
    }
    this.add(road);
    const reflector = new THREE.Reflector(new THREE.PlaneGeometry(10, 10), {
      color: new THREE.Color(0x7f7f7f),
      textureWidth: window.innerWidth * window.devicePixelRatio,
      textureHeight: window.innerHeight * window.devicePixelRatio
    });
    reflector.position.set(0, -0.1, 0);
    reflector.scale.set(200, 200, 1);
    reflector.rotation.set(-Math.PI / 2, 0, 0);
    this.add(reflector);
  }
}
class Sun extends THREE.Group {
  constructor() {
    super();
    const geometry = new THREE.PlaneGeometry();
    const material = MaterialsLibrary.sun;
    const sun = new THREE.Mesh(geometry, material);
    sun.scale.set(50, 50, 1);
    this.add(sun);
  }
}
class Mountain extends THREE.Group {
  constructor() {
    super();
    const material = MaterialsLibrary.mountain;
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.lineTo(100, 0);
    shape.lineTo(100, 50);
    shape.lineTo(50, 10);
    shape.lineTo(20, 15);
    shape.lineTo(15, 5);
    shape.lineTo(10, 10);
    shape.lineTo(0, 0);
    shape.lineTo(-5, 3);
    shape.lineTo(-10, 10);
    shape.lineTo(-12, 8);
    shape.lineTo(-100, 50);
    shape.lineTo(-100, 0);
    shape.lineTo(0, 0);
    const geometry = new THREE.ExtrudeGeometry(shape);
    const mountain = new THREE.Mesh(geometry, material);
    this.add(mountain);
  }
}
class Car extends THREE.Group {
  constructor() {
    super();
    {
      const material = MaterialsLibrary.car;
      const shape = new THREE.Shape();
      shape.moveTo(0, 0);
      shape.lineTo(4, 0);
      shape.lineTo(3.8, 0.3);
      shape.lineTo(-0.1, 0.7);
      shape.lineTo(0, 0);
      const geometry = new THREE.ExtrudeGeometry(shape, {
        depth: 1.5,
        bevelThickness: 0.2
      });
      const body = new THREE.Mesh(geometry, material);
      body.position.set(0, 0.3, 0);
      this.add(body);
    }
    {
      const material = MaterialsLibrary.car;
      const geometry = new THREE.CylinderGeometry(0.6, 1.2, 0.5, 4);
      const roof = new THREE.Mesh(geometry, material);
      roof.position.set(1.5, 1, 0.8);
      roof.rotation.set(0, Math.PI / 4, 0);
      this.add(roof);
    }
    {
      const material = MaterialsLibrary.light;
      const geometry = new THREE.CylinderGeometry(0.1, 0.1, 0.1, 12);
      const light1 = new THREE.Mesh(geometry, material);
      light1.position.set(-0.2, 0.9, 0);
      light1.rotation.set(0, 0, Math.PI / 2);
      this.add(light1);
      const light2 = new THREE.Mesh(geometry, material);
      light2.position.set(-0.2, 0.9, 0.3);
      light2.rotation.set(0, 0, Math.PI / 2);
      this.add(light2);
      const light3 = new THREE.Mesh(geometry, material);
      light3.position.set(-0.2, 0.9, 1.2);
      light3.rotation.set(0, 0, Math.PI / 2);
      this.add(light3);
      const light4 = new THREE.Mesh(geometry, material);
      light4.position.set(-0.2, 0.9, 1.5);
      light4.rotation.set(0, 0, Math.PI / 2);
      this.add(light4);
    }
    {
      const material = MaterialsLibrary.wheel;
      const geometry = new THREE.CylinderGeometry(1, 1, 1, 12);
      const wheel1 = new THREE.Mesh(geometry, material);
      wheel1.scale.set(0.33, 2, 0.33);
      wheel1.position.set(3, 0.33, 0.75);
      wheel1.rotation.set(Math.PI / 2, 0, 0);
      this.add(wheel1);
      const wheel2 = new THREE.Mesh(geometry, material);
      wheel2.scale.set(0.33, 2, 0.33);
      wheel2.position.set(0.7, 0.33, 0.75);
      wheel2.rotation.set(Math.PI / 2, 0, 0);
      this.add(wheel2);
    }
  }
}
class BuildingA extends THREE.Group {
  constructor() {
    super();
    const material = MaterialsLibrary.buildingA;
    const geometry = new THREE.BoxGeometry();
    const building = new THREE.Mesh(geometry, material);
    building.scale.set(10, 15, 10);
    building.position.set(0, -3, 0);
    if (FLAGS.ENABLE_SHADOWS) {
      building.castShadow = true;
    }
    this.add(building);
    const roofGeometry = new THREE.ConeGeometry(5, 15, 7);
    const roof = new THREE.Mesh(roofGeometry, material);
    roof.position.set(0, 5, 0);
    this.add(roof);
  }
}
class BuildingB extends THREE.Group {
  constructor() {
    super();
    const material = MaterialsLibrary.buildingB;
    const geometry = new THREE.CylinderGeometry();
    const building = new THREE.Mesh(geometry, material);
    building.scale.set(5, 15, 5);
    building.position.set(0, -3, 0);
    if (FLAGS.ENABLE_SHADOWS) {
      building.castShadow = true;
    }
    this.add(building);
    const roofGeometry = new THREE.SphereGeometry(7);
    const roof = new THREE.Mesh(roofGeometry, material);
    roof.position.set(0, 2, 0);
    roof.rotation.set(0, 0.3, 0);
    this.add(roof);
  }
}
class BuildingC extends THREE.Group {
  constructor() {
    super();
    const material = MaterialsLibrary.buildingC;
    const geometry = new THREE.BoxGeometry();
    const building = new THREE.Mesh(geometry, material);
    building.scale.set(5, 5, 5);
    building.position.set(0, -8, 0);
    if (FLAGS.ENABLE_SHADOWS) {
      building.castShadow = true;
    }
    this.add(building);
  }
}
class BuildingD extends THREE.Group {
  constructor() {
    super();
    const material = MaterialsLibrary.buildingD;
    const geometry = new THREE.ConeGeometry(1, 1, 3);
    const building = new THREE.Mesh(geometry, material);
    building.scale.set(5, 20, 5);
    building.rotation.set(0, 1, 0);
    if (FLAGS.ENABLE_SHADOWS) {
      building.castShadow = true;
    }
    this.add(building);
  }
}
var _initBuilding = /*#__PURE__*/new WeakSet();
class City extends THREE.Group {
  constructor() {
    super();
    _classPrivateMethodInitSpec(this, _initBuilding);
    for (let z = 0; z < 200; z += 20) {
      for (let x = 70; x >= 10; x -= 20) {
        _classPrivateMethodGet(this, _initBuilding, _initBuilding2).call(this, x, z);
      }
      for (let x = 120; x <= 180; x += 20) {
        _classPrivateMethodGet(this, _initBuilding, _initBuilding2).call(this, x, z);
      }
    }
  }
  update() {
    this.children.forEach(building => {
      const {
        x,
        z
      } = building.position;
      let newZ = z - 0.5;
      if (newZ < 0) {
        newZ = 200;
      }
      const y = newZ <= 150 ? 10 : 10 + 20 * ((150 - newZ) / 50);
      building.position.set(x, y, newZ);
    });
  }
}
function _getRandomBuilding() {
  const choice = Math.random();
  if (choice < 0.2) {
    return new BuildingA();
  }
  if (choice < 0.3) {
    return new BuildingB();
  }
  if (choice < 0.9) {
    return new BuildingC();
  }
  return new BuildingD();
}
function _initBuilding2(x, z) {
  const building = _classStaticPrivateMethodGet(City, City, _getRandomBuilding).call(City);
  building.position.set(x, 20 / 2, z);
  this.add(building);
}
class Stars extends THREE.Group {
  constructor() {
    super();
    const geometry = new THREE.SphereGeometry();
    const material = MaterialsLibrary.light;
    for (let x = -300; x < 300; x += 30) {
      for (let y = 0; y < 300; y += 30) {
        const star = new THREE.Mesh(geometry, material);
        const dx = 25 * Math.random();
        const dy = 25 * Math.random();
        const s = Math.random();
        star.scale.set(s, s, s);
        star.position.set(x + dx, y + dy, 0);
        this.add(star);
      }
    }
  }
}
class ObjectsLibrary {}
_defineProperty(ObjectsLibrary, "road", new Road());
_defineProperty(ObjectsLibrary, "sun", new Sun());
_defineProperty(ObjectsLibrary, "mountain", new Mountain());
_defineProperty(ObjectsLibrary, "car", new Car());
_defineProperty(ObjectsLibrary, "city", new City());
_defineProperty(ObjectsLibrary, "stars", new Stars());
var _savedObjects = /*#__PURE__*/new WeakMap();
var _initObjects = /*#__PURE__*/new WeakSet();
var _initLights = /*#__PURE__*/new WeakSet();
class SandboxWorld extends THREE.Group {
  constructor() {
    super();
    _classPrivateMethodInitSpec(this, _initLights);
    _classPrivateMethodInitSpec(this, _initObjects);
    _classPrivateFieldInitSpec(this, _savedObjects, {
      writable: true,
      value: void 0
    });
    _classPrivateMethodGet(this, _initObjects, _initObjects2).call(this);
    _classPrivateMethodGet(this, _initLights, _initLights2).call(this);
  }
  update() {
    const t = performance.now() / 1000;
    _classPrivateFieldGet(this, _savedObjects).car.position.set(0.7 + 0.2 * Math.sin(t), 0, 10);
    _classPrivateFieldGet(this, _savedObjects).city.update();
  }
}
function _initObjects2() {
  const {
    road,
    car,
    sun,
    city,
    mountain,
    stars
  } = ObjectsLibrary;
  road.position.set(0, 0, 100);
  sun.position.set(0, 10, 200);
  sun.rotation.set(-Math.PI, 0, 0);
  city.position.set(-100, 0, 0);
  mountain.position.set(0, 0, 200);
  car.position.set(0.7, 0, 10);
  car.rotation.set(0, -Math.PI / 2, 0);
  stars.position.set(0, 0, 250);
  this.add(road);
  this.add(sun);
  this.add(car);
  this.add(city);
  this.add(mountain);
  this.add(stars);
  _classPrivateFieldSet(this, _savedObjects, {
    car,
    city
  });
}
function _initLights2() {
  const ambient = new THREE.AmbientLight({
    color: COLOR_PALETTE.color3,
    intensity: 0.1
  });
  this.add(ambient);
  const point = new THREE.PointLight({
    color: COLOR_PALETTE.color1,
    intensity: 5,
    decay: 0.5,
    distance: 300
  });
  point.position.set(0, 30, 180);
  if (FLAGS.ENABLE_SHADOWS) {
    point.castShadow = true;
  }
  this.add(point);
}
var _root = /*#__PURE__*/new WeakMap();
var _frameRequestId = /*#__PURE__*/new WeakMap();
var _scene = /*#__PURE__*/new WeakMap();
var _world = /*#__PURE__*/new WeakMap();
var _camera = /*#__PURE__*/new WeakMap();
var _cameraData = /*#__PURE__*/new WeakMap();
var _renderer = /*#__PURE__*/new WeakMap();
var _composer = /*#__PURE__*/new WeakMap();
var _initScene = /*#__PURE__*/new WeakSet();
var _initObjects3 = /*#__PURE__*/new WeakSet();
var _initCamera = /*#__PURE__*/new WeakSet();
var _initRenderer = /*#__PURE__*/new WeakSet();
var _initComposer = /*#__PURE__*/new WeakSet();
var _initRenderPass = /*#__PURE__*/new WeakSet();
var _initBloomPass = /*#__PURE__*/new WeakSet();
var _initShaderPass = /*#__PURE__*/new WeakSet();
var _initEventListeners = /*#__PURE__*/new WeakSet();
var _onWindowResize = /*#__PURE__*/new WeakSet();
var _onMouseMove = /*#__PURE__*/new WeakSet();
var _updateEverything = /*#__PURE__*/new WeakSet();
var _render = /*#__PURE__*/new WeakSet();
class FullScreen3DExample {
  constructor(root) {
    _classPrivateMethodInitSpec(this, _render);
    _classPrivateMethodInitSpec(this, _updateEverything);
    _classPrivateMethodInitSpec(this, _onMouseMove);
    _classPrivateMethodInitSpec(this, _onWindowResize);
    _classPrivateMethodInitSpec(this, _initEventListeners);
    _classPrivateMethodInitSpec(this, _initShaderPass);
    _classPrivateMethodInitSpec(this, _initBloomPass);
    _classPrivateMethodInitSpec(this, _initRenderPass);
    _classPrivateMethodInitSpec(this, _initComposer);
    _classPrivateMethodInitSpec(this, _initRenderer);
    _classPrivateMethodInitSpec(this, _initCamera);
    _classPrivateMethodInitSpec(this, _initObjects3);
    _classPrivateMethodInitSpec(this, _initScene);
    _classPrivateFieldInitSpec(this, _root, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _frameRequestId, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _scene, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _world, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _camera, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _cameraData, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _renderer, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _composer, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _root, root);
    _classPrivateFieldGet(this, _root).classList.add(FullScreen3DExample.CSS_ROOT);
    _classPrivateMethodGet(this, _initScene, _initScene2).call(this);
    _classPrivateMethodGet(this, _initObjects3, _initObjects4).call(this);
    _classPrivateMethodGet(this, _initCamera, _initCamera2).call(this);
    _classPrivateMethodGet(this, _initRenderer, _initRenderer2).call(this);
    _classPrivateMethodGet(this, _initComposer, _initComposer2).call(this);
    _classPrivateMethodGet(this, _initEventListeners, _initEventListeners2).call(this);
    _classPrivateMethodGet(this, _onWindowResize, _onWindowResize2).call(this);
    _classPrivateFieldGet(this, _root).classList.add(FullScreen3DExample.CSS_ROOT_LOADED_VARIANT);
    _classPrivateMethodGet(this, _render, _render2).call(this);
  }
  start() {
    _classPrivateMethodGet(this, _render, _render2).call(this);
    _classPrivateFieldSet(this, _frameRequestId, requestAnimationFrame(this.start.bind(this)));
  }
  stop() {
    cancelAnimationFrame(_classPrivateFieldGet(this, _frameRequestId));
  }
}
function _initScene2() {
  _classPrivateFieldSet(this, _scene, new THREE.Scene());
}
function _initObjects4() {
  _classPrivateFieldSet(this, _world, new SandboxWorld());
  _classPrivateFieldGet(this, _scene).add(_classPrivateFieldGet(this, _world));
}
function _initCamera2() {
  const fov = 45;
  const aspect = window.innerWidth / window.innerHeight;
  const near = 1;
  const far = 1000;
  _classPrivateFieldSet(this, _camera, new THREE.PerspectiveCamera(fov, aspect, near, far));
  _classPrivateFieldGet(this, _camera).position.set(0, 2, 1);
  _classPrivateFieldGet(this, _camera).lookAt(0, 0, 200);
  _classPrivateFieldGet(this, _camera).updateProjectionMatrix();
  _classPrivateFieldSet(this, _cameraData, {
    positionX: 0,
    positionY: 2
  });
}
function _initRenderer2() {
  const clearColor = COLOR_PALETTE.black;
  const clearColorAlpha = 1;
  _classPrivateFieldSet(this, _renderer, new THREE.WebGLRenderer({
    alpha: true,
    logarithmicDepthBuffer: true
  }));
  _classPrivateFieldGet(this, _renderer).setClearColor(clearColor, clearColorAlpha);
  _classPrivateFieldGet(this, _renderer).setPixelRatio(window.devicePixelRatio);
  if (FLAGS.ENABLE_SHADOWS) {
    _classPrivateFieldGet(this, _renderer).shadowMap.enabled = true;
    _classPrivateFieldGet(this, _renderer).shadowMap.type = THREE.PCFSoftShadowMap;
  }
  _classPrivateFieldGet(this, _root).appendChild(_classPrivateFieldGet(this, _renderer).domElement);
}
function _initComposer2() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  _classPrivateFieldSet(this, _composer, new THREE.EffectComposer(_classPrivateFieldGet(this, _renderer)));
  _classPrivateFieldGet(this, _composer).setSize(width, height);
  _classPrivateMethodGet(this, _initRenderPass, _initRenderPass2).call(this);
  if (FLAGS.ENABLE_BLOOM) {
    _classPrivateMethodGet(this, _initBloomPass, _initBloomPass2).call(this);
  }
  if (FLAGS.ENABLE_NOISE) {
    _classPrivateMethodGet(this, _initShaderPass, _initShaderPass2).call(this);
  }
}
function _initRenderPass2() {
  const renderPass = new THREE.RenderPass(_classPrivateFieldGet(this, _scene), _classPrivateFieldGet(this, _camera));
  _classPrivateFieldGet(this, _composer).addPass(renderPass);
}
function _initBloomPass2() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const resolution = new THREE.Vector2(width, height);
  const strength = 0.8;
  const radius = 0.5;
  const threshold = 0.1;
  const bloomPass = new THREE.UnrealBloomPass(resolution, strength, radius, threshold);
  _classPrivateFieldGet(this, _composer).addPass(bloomPass);
}
function _initShaderPass2() {
  const pass = new THREE.ShaderPass({
    uniforms: {
      tDiffuse: {
        type: 't',
        value: null
      },
      uTime: {
        value: 1
      }
    },
    vertexShader: `
                varying vec2 vUv;

                void main() {
                    vUv = uv;

                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }`,
    fragmentShader: `
                uniform float uTime;
                uniform sampler2D tDiffuse;

                varying vec2 vUv;

                float rand(vec2 seed);
                float noise(vec2 position);

                void main() {
                    vec4 color = texture2D(tDiffuse, vUv);

                    float d = 0.05 * noise(50.0 * (100.0 * uTime + vec2(vUv.x, 20.0 * vUv.y)));

                    color = vec4(color.r - d, color.g - d, color.b - d, 1.0);

                    gl_FragColor = color;
                }

                float rand(vec2 seed) {
                    return fract(sin(dot(seed, vec2(12.9898,78.233))) * 43758.5453123);
                }

                float noise(vec2 position) {
                    vec2 blockPosition = floor(position);

                    float topLeftValue     = rand(blockPosition);
                    float topRightValue    = rand(blockPosition + vec2(1.0, 0.0));
                    float bottomLeftValue  = rand(blockPosition + vec2(0.0, 1.0));
                    float bottomRightValue = rand(blockPosition + vec2(1.0, 1.0));

                    vec2 computedValue = smoothstep(0.0, 1.0, fract(position));

                    return mix(topLeftValue, topRightValue, computedValue.x)
                        + (bottomLeftValue  - topLeftValue)  * computedValue.y * (1.0 - computedValue.x)
                        + (bottomRightValue - topRightValue) * computedValue.x * computedValue.y;
                }
            `
  });
  pass.renderToScreen = true;
  _classPrivateFieldGet(this, _composer).addPass(pass);
}
function _initEventListeners2() {
  window.addEventListener('resize', _classPrivateMethodGet(this, _onWindowResize, _onWindowResize2).bind(this));
  document.addEventListener('mousemove', _classPrivateMethodGet(this, _onMouseMove, _onMouseMove2).bind(this));
}
function _onWindowResize2() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  _classPrivateFieldGet(this, _camera).aspect = width / height;
  _classPrivateFieldGet(this, _camera).updateProjectionMatrix();
  _classPrivateFieldGet(this, _renderer).setSize(width, height);
  _classPrivateFieldGet(this, _composer).setSize(width, height);
}
function _onMouseMove2(e) {
  _classPrivateFieldGet(this, _cameraData).positionX = 5 * (window.innerWidth / 2 - e.clientX) / window.innerWidth;
  _classPrivateFieldGet(this, _cameraData).positionY = 2 + 0.5 * (window.innerHeight / 2 - e.clientY) / window.innerHeight;
}
function _updateEverything2() {
  const t = performance.now() / 1000;
  _classPrivateFieldGet(this, _world).update();
  _classPrivateFieldGet(this, _scene).traverse(child => {
    if (child.isMesh) {
      const {
        shader
      } = child.material.userData;
      if (shader) {
        shader.uniforms.uTime.value = t;
      }
    }
  });
  _classPrivateFieldGet(this, _composer).passes.forEach(pass => {
    if (pass instanceof THREE.ShaderPass) {
      // eslint-disable-next-line no-param-reassign
      pass.uniforms.uTime.value = t % 10;
    }
  });
  {
    const x = _classPrivateFieldGet(this, _cameraData).positionX + 0.3 * (Math.sin(0.1 * t) + Math.sin(0.05 * t));
    const y = _classPrivateFieldGet(this, _cameraData).positionY + 0.3 * Math.cos(0.3 * t);
    _classPrivateFieldGet(this, _camera).position.set(x, y, 1);
    _classPrivateFieldGet(this, _camera).updateProjectionMatrix();
  }
}
function _render2() {
  _classPrivateMethodGet(this, _updateEverything, _updateEverything2).call(this);
  _classPrivateFieldGet(this, _composer).render(_classPrivateFieldGet(this, _scene), _classPrivateFieldGet(this, _camera));
}
_defineProperty(FullScreen3DExample, "CSS_ROOT", 'full-screen-3d-example');
_defineProperty(FullScreen3DExample, "CSS_ROOT_LOADED_VARIANT", '-loaded');
function main() {
  const root = document.getElementById('root');
  const example = new FullScreen3DExample(root);
  example.start();
}
document.addEventListener('DOMContentLoaded', main);
