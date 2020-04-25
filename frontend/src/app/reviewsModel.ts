export class Review {
    id: String;
    url: String;
    text: String;
    rating: Number;
    time_created: String;
    user:{
        id: String;
        profile_url: String;
        image_url: String;
        name: String;
    };
}