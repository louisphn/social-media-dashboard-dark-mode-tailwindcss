import IconArea from '../common/IconArea';
import { icon } from '../../lib/data';
import { kFormatter } from '../../lib/helper';

// stats: {object (page views, likes, profile views, retweets,...): string, type: string, stat: number} (type: increase/ decrease, stat: number of increment/ decrement);

const OverviewCard = (props) => {
  const { type, number, stats } = props;

  return (
    <div className="relative pointer-events-auto cursor-pointer rounded-lg w-11/12 h-[128px] flex items-center justify-between bg-background-card-light dark:bg-background-card-dark p-8 my-4 hover:filter hover:brightness-95 dark:hover:brightness-125 md:w-[21%]">
      <div>
        <p className="text-text-light dark:text-text-dark mb-4">
          {stats.object}
        </p>
        <h3 className="text-3xl font-bold text-heading-text-light dark:text-heading-text-dark">
          {kFormatter(number)}
        </h3>
      </div>
      <div className="flex flex-col items-end">
        <div className="block w-[24px] h-[24px] mb-6">
          <IconArea
            src={icon[type]}
            layout={'responsive'}
            width={56}
            height={56}
            objectFit={'cover'}
          />
        </div>
        <div className="flex items-center jutstify-center">
          <div className="block w-[12px] h-[8px]">
            <IconArea
              src={
                stats.type === 'increase' ? '/icon-up.svg' : '/icon-down.svg'
              }
              width={56}
              height={56}
              objectFit={'contain'}
            />
          </div>
          <p
            className={`ml-[8px] ${
              stats.type === 'increase' ? 'text-lime-green' : 'text-bright-red'
            }`}
          >
            {stats.stat}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
