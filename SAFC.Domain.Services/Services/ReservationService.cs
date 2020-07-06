using SAFC.Domain.Core;
using SAFC.Domain.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace SAFC.Domain.Services
{
    public class ReservationService : IReservationService
    {
        private readonly IGenericRepository<ReservationRequest> _genericRepository;
        public ReservationService(IGenericRepository<ReservationRequest> genericRepository)
        {
            _genericRepository = genericRepository;
        }

        public int CreateNewReservationRequest(ReservationRequest request)
        {
            try
            {
                if (request.ID == 0)
                    _genericRepository.Insert(request);
                else
                    _genericRepository.Update(request);
                return 1;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message, ex);
            }
        }

    }
}
