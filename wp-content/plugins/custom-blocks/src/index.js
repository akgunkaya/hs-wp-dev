import { registerBlockType } from "@wordpress/blocks";
import ThreeColumnEdit from "./three-column-edit";
import ThreeColumnSave from "./three-column-save";
import HeroBannerEdit from "./hero-banner-edit";
import HeroBannerSave from "./hero-banner-save";
import "./style.scss";

registerBlockType("hero-banner-block/banner-block", {
	apiVersion: 2,
	title: "Hero Banner Block",
	icon: "smiley",
	category: "layout",
	attributes: {
		title: {
			type: "string",
			default: "Default Title",
		},
		subtitle: {
			type: "string",
			default: "Default Subtitle",
		},
		imageUrl: {
			type: "string",
			default: null,
		},
		ctaButtonText: {
			type: "string",
			default: "Click Me",
		},
		ctaButtonLink: {
			type: "string",
			default: "",
		},
	},
	edit: HeroBannerEdit,
	save: HeroBannerSave,
});

registerBlockType("your-theme/three-column-section", {
	apiVersion: 2,
	title: "Three Column Section",
	icon: "grid-view",
	category: "layout",
	attributes: {
		overallTitle: {
			type: "string",
			default: "Your Overall Title",
		},
		columns: {
			type: "array",
			default: [
				{
					imageUrl: null,
					title: "Column 1 Title",
					text: "Some text for column 1",
				},
				{
					imageUrl: null,
					title: "Column 2 Title",
					text: "Some text for column 2",
				},
				{
					imageUrl: null,
					title: "Column 3 Title",
					text: "Some text for column 3",
				},
			],
		},
	},
	edit: ThreeColumnEdit,
	save: ThreeColumnSave,
});
