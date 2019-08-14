declare namespace DemoResponse {

    export interface PosterArt {
        url: string;
        width: number;
        height: number;
    }

    export interface Images {
        posterArt: PosterArt;
    }

    export interface Entry {
        title: string;
        description: string;
        programType: string;
        images: Images;
        releaseYear: number;
    }

    export interface RootObject {
        total: number;
        entries: Entry[];
    }

}
