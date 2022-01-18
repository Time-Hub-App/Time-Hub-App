# Time Hub App


    The Time Hub App is a quick and convenient way to log journal entries and track emotions.
    
    Journaling is a very underrated activity that boosts your well-being in just a few minutes a day. Jot your thoughts down or record what happened during the day for a simple way to manage stress, enhance your creativity, increase happiness, and even your track emotions!

[Netlify Link](https://time-hub.netlify.app/)

---
##  About Creators

Fora
- [LinkedIn](https://www.linkedin.com/in/fora-heims/)
- [GitHub](https://github.com/fora-heims)

Libbi
- [LinkedIn](https://www.linkedin.com/in/libbi-dunham/)
- [GitHub](https://github.com/Libbi-Dunham)

Ckay
- [LinkedIn](https://www.linkedin.com/in/ckaynatividad/)
 - [GitHub](https://github.com/ckaynatividad)

Abriel
- [LinkedIn](https://www.linkedin.com/in/abrielcleaver/)
- [GitHub](https://github.com/abrielcleaver)

---

## Dependencies

- React-Router
- Supabase
- eslint
- prettier

---

## Supabase Information
 - Supabase table #1 called `journals` which has the following columns

   | column     |
   | ---------- |
   | id         |
   | created_at       |
   | updated_at      |
   | user_id       |
   | priv_or_public |
   | entries       |
   | title       |
   | shared_with       |

- Supabase table #2 called `profiles` which has the following columns

   | column     |
   | ---------- |
   | id         |
   | created_at       |
   | user_id       |
   | bio      |
   | image |

- Supabase table #3 called `entries` which has the following columns

   | column     |
   | ---------- |
   | journal_id         |
   | text(encrypted)       |
   

Policies for INSERT, DELETE, READ and UPDATE

   | Action | Policy                             | Description                                |
   | ------ | ---------------------------------- | ------------------------------------------ |
   | READ   | `true`                             | Enable read access to all users            |
   | INSERT | `role() = 'authenticated'::text)`  | Enable insert for authenticated users only |
   | DELETE | `role() = 'authenticated'::text)`  | Enable delete for authenticated users only |
   | UPDATE | `(role() = 'authenticated'::text)` | Enable update for authenticated users only |





---
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
