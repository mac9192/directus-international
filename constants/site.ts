export interface SiteConfig {
    siteName: string;
    description: string;
    currentlyAt: string,
    socialLinks: {
        twitter: string;
        youtube: string;
        github: string;
        linkedin: string;
        instagram: string;
        facebook: string;
    }
}

const siteConfig: SiteConfig = {
    siteName:"Law Firm",
    description:"A minimal and lovely travel blog which shares experiences and cities around the world.",
    currentlyAt: "Budapest",
    socialLinks: {
        twitter: "https://twitter.com/makrdev",
        youtube: "htpps://youtube.com/@makrdev",
        github: "https://github.com/batuhanbilginn",
        linkedin: "https://linkedin.com/in/batuhanbilgin",
        instagram: "https://instagram.com/batuhanbilginn",
        facebook: "https://facebook.com",
    }
};

export default siteConfig