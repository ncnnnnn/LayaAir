import { BaseTexture } from "laya/resource/BaseTexture";
import { Vector4 } from "../../math/Vector4";
import { ShaderDefines } from "../../shader/ShaderDefines";
import { BaseMaterial } from "./BaseMaterial";
/**
 * <code>PBRSpecularMaterial</code> 类用于实现PBR(Specular)材质。
 */
export declare class PBRSpecularMaterial extends BaseMaterial {
    /**光滑度数据源_高光贴图的Alpha通道。*/
    static SmoothnessSource_SpecularTexture_Alpha: number;
    /**光滑度数据源_反射率贴图的Alpha通道。*/
    static SmoothnessSource_AlbedoTexture_Alpha: number;
    /**渲染状态_不透明。*/
    static RENDERMODE_OPAQUE: number;
    /**渲染状态_透明测试。*/
    static RENDERMODE_CUTOUT: number;
    /**渲染状态_透明混合_游戏中经常使用的透明。*/
    static RENDERMODE_FADE: number;
    /**渲染状态_透明混合_物理上看似合理的透明。*/
    static RENDERMODE_TRANSPARENT: number;
    static SHADERDEFINE_ALBEDOTEXTURE: number;
    static SHADERDEFINE_NORMALTEXTURE: number;
    static SHADERDEFINE_SMOOTHNESSSOURCE_ALBEDOTEXTURE_ALPHA: number;
    static SHADERDEFINE_SPECULARTEXTURE: number;
    static SHADERDEFINE_OCCLUSIONTEXTURE: number;
    static SHADERDEFINE_PARALLAXTEXTURE: number;
    static SHADERDEFINE_EMISSION: number;
    static SHADERDEFINE_EMISSIONTEXTURE: number;
    static SHADERDEFINE_TILINGOFFSET: number;
    static SHADERDEFINE_ALPHAPREMULTIPLY: number;
    static ALBEDOTEXTURE: number;
    static SPECULARTEXTURE: number;
    static NORMALTEXTURE: number;
    static PARALLAXTEXTURE: number;
    static OCCLUSIONTEXTURE: number;
    static EMISSIONTEXTURE: number;
    static ALBEDOCOLOR: number;
    static SPECULARCOLOR: number;
    static EMISSIONCOLOR: number;
    static SMOOTHNESS: number;
    static SMOOTHNESSSCALE: number;
    static SMOOTHNESSSOURCE: number;
    static OCCLUSIONSTRENGTH: number;
    static NORMALSCALE: number;
    static PARALLAXSCALE: number;
    static ENABLEEMISSION: number;
    static ENABLEREFLECT: number;
    static TILINGOFFSET: number;
    static CULL: number;
    static BLEND: number;
    static BLEND_SRC: number;
    static BLEND_DST: number;
    static DEPTH_TEST: number;
    static DEPTH_WRITE: number;
    /** 默认材质，禁止修改*/
    static defaultMaterial: PBRSpecularMaterial;
    /**@private */
    static shaderDefines: ShaderDefines;
    /**
     * @private
     */
    static __initDefine__(): void;
    /**@private */
    private _albedoColor;
    /**@private */
    private _specularColor;
    /**@private */
    private _emissionColor;
    /**
     * @private
     */
    /**
    * @private
    */
    _ColorR: number;
    /**
     * @private
     */
    /**
    * @private
    */
    _ColorG: number;
    /**
     * @private
     */
    /**
    * @private
    */
    _ColorB: number;
    /**
     * @private
     */
    /**
    * @private
    */
    _ColorA: number;
    /**
     * @private
     */
    /**
    * @private
    */
    _SpecColorR: number;
    /**
     * @private
     */
    /**
    * @private
    */
    _SpecColorG: number;
    /**
     * @private
     */
    /**
    * @private
    */
    _SpecColorB: number;
    /**
     * @private
     */
    /**
    * @private
    */
    _SpecColorA: number;
    /**
     * @private
     */
    /**
    * @private
    */
    _Glossiness: number;
    /**
     * @private
     */
    /**
    * @private
    */
    _GlossMapScale: number;
    /**
     * @private
     */
    /**
    * @private
    */
    _BumpScale: number;
    /**@private */
    /**
    * @private
    */
    _Parallax: number;
    /**@private */
    /**
    * @private
    */
    _OcclusionStrength: number;
    /**
     * @private
     */
    /**
    * @private
    */
    _EmissionColorR: number;
    /**
     * @private
     */
    /**
    * @private
    */
    _EmissionColorG: number;
    /**
     * @private
     */
    /**
    * @private
    */
    _EmissionColorB: number;
    /**
     * @private
     */
    /**
    * @private
    */
    _EmissionColorA: number;
    /**
     * @private
     */
    /**
    * @private
    */
    _MainTex_STX: number;
    /**
     * @private
     */
    /**
    * @private
    */
    _MainTex_STY: number;
    /**
     * @private
     */
    /**
    * @private
    */
    _MainTex_STZ: number;
    /**
     * @private
     */
    /**
    * @private
    */
    _MainTex_STW: number;
    /**
     * @private
     */
    /**
    * @private
    */
    _Cutoff: number;
    /**
     * 获取反射率颜色R分量。
     * @return 反射率颜色R分量。
     */
    /**
    * 设置反射率颜色R分量。
    * @param value 反射率颜色R分量。
    */
    albedoColorR: number;
    /**
     * 获取反射率颜色G分量。
     * @return 反射率颜色G分量。
     */
    /**
    * 设置反射率颜色G分量。
    * @param value 反射率颜色G分量。
    */
    albedoColorG: number;
    /**
     * 获取反射率颜色B分量。
     * @return 反射率颜色B分量。
     */
    /**
    * 设置反射率颜色B分量。
    * @param value 反射率颜色B分量。
    */
    albedoColorB: number;
    /**
     * 获取反射率颜色A分量。
     * @return 反射率颜色A分量。
     */
    /**
    * 设置反射率颜色A分量。
    * @param value 反射率颜色A分量。
    */
    albedoColorA: number;
    /**
     * 获取反射率颜色。
     * @return 反射率颜色。
     */
    /**
    * 设置反射率颜色。
    * @param value 反射率颜色。
    */
    albedoColor: Vector4;
    /**
     * 获取漫反射贴图。
     * @return 漫反射贴图。
     */
    /**
    * 设置漫反射贴图。
    * @param value 漫反射贴图。
    */
    albedoTexture: BaseTexture;
    /**
     * 获取法线贴图。
     * @return 法线贴图。
     */
    /**
    * 设置法线贴图。
    * @param value 法线贴图。
    */
    normalTexture: BaseTexture;
    /**
     * 获取法线贴图缩放系数。
     * @return 法线贴图缩放系数。
     */
    /**
    * 设置法线贴图缩放系数。
    * @param value 法线贴图缩放系数。
    */
    normalTextureScale: number;
    /**
     * 获取视差贴图。
     * @return 视察贴图。
     */
    /**
    * 设置视差贴图。
    * @param value 视察贴图。
    */
    parallaxTexture: BaseTexture;
    /**
     * 获取视差贴图缩放系数。
     * @return 视差缩放系数。
     */
    /**
    * 设置视差贴图缩放系数。
    * @param value 视差缩放系数。
    */
    parallaxTextureScale: number;
    /**
     * 获取遮挡贴图。
     * @return 遮挡贴图。
     */
    /**
    * 设置遮挡贴图。
    * @param value 遮挡贴图。
    */
    occlusionTexture: BaseTexture;
    /**
     * 获取遮挡贴图强度。
     * @return 遮挡贴图强度,范围为0到1。
     */
    /**
    * 设置遮挡贴图强度。
    * @param value 遮挡贴图强度,范围为0到1。
    */
    occlusionTextureStrength: number;
    /**
     * 获取高光贴图。
     * @return 高光贴图。
     */
    /**
    * 设置高光贴图。
    * @param value 高光贴图。
    */
    specularTexture: BaseTexture;
    /**
     * 获取高光颜色R分量。
     * @return 高光颜色R分量。
     */
    /**
    * 设置高光颜色R分量。
    * @param value 高光颜色R分量。
    */
    specularColorR: number;
    /**
     * 获取高光颜色G分量。
     * @return 高光颜色G分量。
     */
    /**
    * 设置高光颜色G分量。
    * @param value 高光颜色G分量。
    */
    specularColorG: number;
    /**
     * 获取高光颜色B分量。
     * @return 高光颜色B分量。
     */
    /**
    * 设置高光颜色B分量。
    * @param value 高光颜色B分量。
    */
    specularColorB: number;
    /**
     * 获取高光颜色A分量。
     * @return 高光颜色A分量。
     */
    /**
    * 设置高光颜色A分量。
    * @param value 高光颜色A分量。
    */
    specularColorA: number;
    /**
     * 获取高光颜色。
     * @return 高光颜色。
     */
    /**
    * 设置高光颜色。
    * @param value 高光颜色。
    */
    specularColor: Vector4;
    /**
     * 获取光滑度。
     * @return 光滑度,范围为0到1。
     */
    /**
    * 设置光滑度。
    * @param value 光滑度,范围为0到1。
    */
    smoothness: number;
    /**
     * 获取光滑度缩放系数。
     * @return 光滑度缩放系数,范围为0到1。
     */
    /**
    * 设置光滑度缩放系数。
    * @param value 光滑度缩放系数,范围为0到1。
    */
    smoothnessTextureScale: number;
    /**
     * 获取光滑度数据源
     * @return 光滑滑度数据源,0或1。
     */
    /**
    * 设置光滑度数据源。
    * @param value 光滑滑度数据源,0或1。
    */
    smoothnessSource: number;
    /**
     * 获取是否激活放射属性。
     * @return 是否激活放射属性。
     */
    /**
    * 设置是否激活放射属性。
    * @param value 是否激活放射属性
    */
    enableEmission: boolean;
    /**
     * 获取放射颜色。
     * @return 放射颜色。
     */
    /**
    * 设置放射颜色。
    * @param value 放射颜色。
    */
    emissionColor: Vector4;
    /**
     * 获取放射贴图。
     * @return 放射贴图。
     */
    /**
    * 设置放射贴图。
    * @param value 放射贴图。
    */
    emissionTexture: BaseTexture;
    /**
     * 获取是否开启反射。
     * @return 是否开启反射。
     */
    /**
    * 设置是否开启反射。
    * @param value 是否开启反射。
    */
    enableReflection: boolean;
    /**
     * 获取纹理平铺和偏移X分量。
     * @return 纹理平铺和偏移X分量。
     */
    /**
    * 获取纹理平铺和偏移X分量。
    * @param x 纹理平铺和偏移X分量。
    */
    tilingOffsetX: number;
    /**
     * 获取纹理平铺和偏移Y分量。
     * @return 纹理平铺和偏移Y分量。
     */
    /**
    * 获取纹理平铺和偏移Y分量。
    * @param y 纹理平铺和偏移Y分量。
    */
    tilingOffsetY: number;
    /**
     * 获取纹理平铺和偏移Z分量。
     * @return 纹理平铺和偏移Z分量。
     */
    /**
    * 获取纹理平铺和偏移Z分量。
    * @param z 纹理平铺和偏移Z分量。
    */
    tilingOffsetZ: number;
    /**
     * 获取纹理平铺和偏移W分量。
     * @return 纹理平铺和偏移W分量。
     */
    /**
    * 获取纹理平铺和偏移W分量。
    * @param w 纹理平铺和偏移W分量。
    */
    tilingOffsetW: number;
    /**
     * 获取纹理平铺和偏移。
     * @return 纹理平铺和偏移。
     */
    /**
    * 获取纹理平铺和偏移。
    * @param value 纹理平铺和偏移。
    */
    tilingOffset: Vector4;
    /**
     * 设置渲染模式。
     * @return 渲染模式。
     */
    renderMode: number;
    /**
     * 设置是否写入深度。
     * @param value 是否写入深度。
     */
    /**
    * 获取是否写入深度。
    * @return 是否写入深度。
    */
    depthWrite: boolean;
    /**
     * 设置剔除方式。
     * @param value 剔除方式。
     */
    /**
    * 获取剔除方式。
    * @return 剔除方式。
    */
    cull: number;
    /**
     * 设置混合方式。
     * @param value 混合方式。
     */
    /**
    * 获取混合方式。
    * @return 混合方式。
    */
    blend: number;
    /**
     * 设置混合源。
     * @param value 混合源
     */
    /**
    * 获取混合源。
    * @return 混合源。
    */
    blendSrc: number;
    /**
     * 设置混合目标。
     * @param value 混合目标
     */
    /**
    * 获取混合目标。
    * @return 混合目标。
    */
    blendDst: number;
    /**
     * 设置深度测试方式。
     * @param value 深度测试方式
     */
    /**
    * 获取深度测试方式。
    * @return 深度测试方式。
    */
    depthTest: number;
    /**
     * 创建一个 <code>PBRSpecularMaterial</code> 实例。
     */
    constructor();
    /**
 * 克隆。
 * @return	 克隆副本。
 */
    clone(): any;
    /**
     * @inheritDoc
     */
    cloneTo(destObject: any): void;
}