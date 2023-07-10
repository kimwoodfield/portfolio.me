import axios from 'axios';

export const fetchAnimeWatchedCount = async () => {
    const query = `
        query {
            User(name: "zeerohh") {
            statistics {
                anime {
                count
                }
            }
            }
        }
    `;

    const url = 'https://graphql.anilist.co';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        data: JSON.stringify({
            query,
        }),
    };

    const response = await axios(url, options);
    return response.data.data.User.statistics.anime.count;
};
