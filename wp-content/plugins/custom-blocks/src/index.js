import { registerBlockType } from "@wordpress/blocks";
import ThreeColumnEdit from "./three-column-edit";
import ThreeColumnSave from "./three-column-save";
import HeroBannerEdit from "./hero-banner-edit";
import HeroBannerSave from "./hero-banner-save";
import CustomTestimonialEdit from "./custom-testimonial-edit";
import CustomTestimonialSave from "./custom-testimonial-save";
import ProductDisplayEdit from "./product-display-edit";
import ProductDisplaySave from "./product-display-save";
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

registerBlockType("custom-testimonial-block/testimonial-block", {
	apiVersion: 2,
	title: "Custom Testimonial Block",
	icon: "format-quote",
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
		testimonials: {
			type: "array",
			default: [
				{ name: "John Doe", text: "This is a testimonial." },
				{ name: "Jane Doe", text: "This is another testimonial." },
				{ name: "Steve Smith", text: "Yet another testimonial." },
				{ name: "Sara Johnson", text: "Great service!" },
			],
			items: {
				type: "object",
				properties: {
					name: { type: "string" },
					text: { type: "string" },
				},
			},
		},
	},
	edit: CustomTestimonialEdit,
	save: CustomTestimonialSave,
});

registerBlockType("product-display-block/product-block", {
	apiVersion: 2,
	title: "Product Display Block",
	icon: "cart",
	category: "layout",
	attributes: {
		badgeText: {
			type: "string",
			default: "New",
		},
		productName: {
			type: "string",
			default: "Product Name",
		},
		productDescription: {
			type: "string",
			default: "Description of the product",
		},
		bulletPoints: {
			type: "array",
			default: ["Feature 1", "Feature 2", "Feature 3"],
			items: {
				type: "string",
			},
		},
		imageUrl: {
			type: "string",
			default: null,
		},
		price: {
			type: "number",
			default: 0,
		},
		ctaText: {
			type: "string",
			default: "Buy Now",
		},
	},
	edit: ProductDisplayEdit,
	save: ProductDisplaySave,
});
