using SAFC.Domain.Core;

namespace SAFC.Domain.Services
{
    public interface IReservationService
    {
        int CreateNewReservationRequest(ReservationRequest request);
    }
}