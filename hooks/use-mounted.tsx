import { useEffect, useState } from "react";

export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}

/*
Je vend un clavier ergonomique difficile à se procurer en France.
A tous les fan de vim cela peut-être intéressant pour plusieurs raisons que je vais pas détailler ici
Je représente personne à part moi même et le dit clavier est une acquisition que j'ai fait avec mes propre sousou (et j'en possède 1 seul pas dix...).
Je ne fais de la pub ni pour la société qui vend le clavier ni pour personne, c'est seulement une transaction peer-to-peer, de dev à dev, sur un fofo de dev.
**Si vous êtes intéressé merci de me contacter en dm.**
https://kinesis-ergo.com/shop/advantage2-lfq/
*/
