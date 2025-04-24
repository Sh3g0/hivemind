import LogoConScrittaStorico from "../components/logoConScrittaStorico";
import StoricoOfferteAgente from "../components/storicoOfferteAgente";
import TendinaLateraleTracking from "../components/tendinaLateraleTracking";

export default function TrackingOfferte() {
  return (
    <div className="flex min-h-screen">
      <div className="w-20 bg-white shadow-md z-10">
        <TendinaLateraleTracking />
      </div>

      <div className="flex-1 p-8">
        <LogoConScrittaStorico/>
        <StoricoOfferteAgente/>

       
      </div>
    </div>
  );
}
